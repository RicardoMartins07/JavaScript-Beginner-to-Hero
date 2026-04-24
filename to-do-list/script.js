"use strict";

const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");
const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");
const form = document.getElementById("todo-form");

let tasks = [];

//Local Storage
const saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const renderTask = function (task) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  if (task.completed) {
    taskItem.classList.add("completed");
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-left");

  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = task.text;

  const btnComplete = document.createElement("button");
  btnComplete.classList.add("complete-btn");
  btnComplete.textContent = "✔";
  btnComplete.addEventListener("click", function () {
    if (task.completed) {
      taskItem.classList.remove("completed");
      task.completed = false;
      updateCounters();
      saveTasks();
      return;
    }
    taskItem.classList.add("completed");
    task.completed = true;
    updateCounters();
    saveTasks();
  });

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("delete-btn");
  btnDelete.textContent = "✖";
  btnDelete.addEventListener("click", function () {
    const taskIndex = tasks.indexOf(task);

    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
    }

    renderTasks();
    updateCounters();
    saveTasks();
  });

  taskDiv.appendChild(taskText);
  taskItem.appendChild(taskDiv);
  taskItem.appendChild(btnComplete);
  taskItem.appendChild(btnDelete);

  taskList.appendChild(taskItem);
};

// Renderizar todas as tarefas
const renderTasks = function () {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    renderEmptyState();
    return;
  }

  tasks.forEach(function (task) {
    renderTask(task);
  });
};

// Atualizar contadores
const updateCounters = function () {
  totalTasks.textContent = tasks.length;

  const completedCount = tasks.filter(function (task) {
    return task.completed;
  }).length;

  completedTasks.textContent = completedCount;
};

// Mostrar empty state
const renderEmptyState = function () {
  taskList.innerHTML =
    '<li class="empty-state">No tasks yet. Add your first one.</li>';
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const typedTask = taskInput.value.trim();

  if (typedTask === "") {
    alert("Please Type a task!");
    return;
  }

  const taskToAdd = {
    text: typedTask,
    completed: false,
  };

  tasks.push(taskToAdd);

  renderTasks();
  updateCounters();
  saveTasks();
  taskInput.value = "";
});

const loadTasks = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (savedTasks) {
    tasks = savedTasks;
  }
};

// Init
loadTasks();
renderTasks();
updateCounters();
