"use strict";

const inputSearch = document.getElementById("search");
const ListUsers = document.getElementById("results");
const noResults = document.getElementById("no-results");

let users = ["Ricardo", "Clara", "João", "Isabel", "Rodrigo"];

//Local Storage
const saveUsers = function () {
  localStorage.setItem("users", JSON.stringify(users));
};

const renderUsers = function (lista) {
  ListUsers.innerHTML = "";
  if (lista.length === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
  }

  for (let i = 0; i <= lista.length - 1; i++) {
    const results = document.createElement("li");
    const avatar = document.createElement("div");
    const name = document.createElement("span");

    results.classList.add("result-item");
    avatar.classList.add("avatar");
    name.classList.add("name");

    name.textContent = lista[i];
    avatar.textContent = lista[i][0];

    results.append(avatar);
    results.append(name);
    ListUsers.append(results);
  }
};

inputSearch.addEventListener("input", function () {
  const input = inputSearch.value.toLowerCase();
  const usersFiltered = [];

  for (let i = 0; i <= users.length - 1; i++) {
    const userNameLowerCase = users[i].toLowerCase();
    if (userNameLowerCase.startsWith(input)) {
      usersFiltered.push(users[i]);
    }
  }

  renderUsers(usersFiltered);
});

const loadUsersFromStorage = function () {
  const savedUsers = JSON.parse(localStorage.getItem("users"));

  if (savedUsers) {
    users = savedUsers;
  }
};

loadUsersFromStorage();
renderUsers(users);
