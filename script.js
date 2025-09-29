// Elements
const authSection = document.getElementById("auth-section");
const authForm = document.getElementById("auth-form");
const taskSection = document.getElementById("task-section");
const displayUsername = document.getElementById("display-username");
const displayEmail = document.getElementById("display-email");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");
const logoutBtn = document.getElementById("logout-btn");

// Handle sign in / sign up
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  displayUsername.textContent = username;
  displayEmail.textContent = email;

  authSection.classList.add("hidden");
  taskSection.classList.remove("hidden");
});

// Add task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value;
  const taskDueDate = taskDate.value;
  const taskDueTime = taskTime.value;

  const li = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = `${taskText} (Due: ${taskDueDate} ${taskDueTime})`;

  // Action buttons
  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  // Completed button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Completed";
  completeBtn.onclick = () => {
    taskSpan.style.textDecoration = "line-through";
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  // Postpone button
  const postponeBtn = document.createElement("button");
  postponeBtn.textContent = "Postpone";
  postponeBtn.onclick = () => {
    const newDate = prompt("Enter new date (YYYY-MM-DD):", taskDueDate);
    const newTime = prompt("Enter new time (HH:MM):", taskDueTime);
    if (newDate && newTime) {
      taskSpan.textContent = `${taskText} (Due: ${newDate} ${newTime}, postponed)`;
    }
  };

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  actions.appendChild(postponeBtn);

  li.appendChild(taskSpan);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
});

// Logout
logoutBtn.addEventListener("click", () => {
  taskSection.classList.add("hidden");
  authSection.classList.remove("hidden");
  authForm.reset();
  taskForm.reset();
  taskList.innerHTML = "";
});
