# 📝 To-Do List

A modern and interactive To-Do List application built with **HTML**, **CSS**, and **JavaScript**.

This project allows users to manage tasks efficiently with features like adding, completing, deleting, and persisting tasks using **localStorage**.

---

## 🚀 Preview

A clean and responsive interface where users can:

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Track total and completed tasks
- Keep tasks saved even after refreshing the page

---

## 🕹️ Features

- ➕ Add new tasks
- ✔️ Mark tasks as completed
- ❌ Delete tasks
- 📊 Dynamic counters (total & completed)
- 💾 Data persistence with `localStorage`
- 🎯 Empty state when no tasks exist

---

## 🧠 How It Works

- Tasks are stored in an array of objects:

```js
{
  text: "Study JavaScript",
  completed: false
}
```

- The UI is dynamically rendered based on this array
- Every change updates:
  - the DOM
  - the counters
  - the `localStorage`

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## 📁 Project Structure

```bash
.
├── index.html
├── style.css
└── script.js
```

---

## 📚 What I Learned

While building this project, I practiced:

- DOM manipulation and dynamic rendering
- Event handling on dynamically created elements
- Managing application state with arrays and objects
- Using `localStorage` to persist data
- Updating UI based on state changes
- Structuring code into reusable functions

---

## 🔮 Possible Improvements

- ✏️ Edit tasks
- 🔍 Filter tasks (All / Completed / Active)
- 🎨 Improve UI/UX and animations
- ⌨️ Add keyboard shortcuts
- 📱 Improve mobile responsiveness

---

## 🔗 Live Demo

- To-Do List → [Open](https://ricardomartins07.github.io/JavaScript-Beginner-to-Hero/to-do-list/)

---

## 👤 Author

Made by **Ricardo Martins**

---
