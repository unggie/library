# 📚 Library Management App (Vanilla JavaScript)

A simple **Book Library Web App** built entirely with **vanilla JavaScript**, **HTML**, and **CSS**.  
This project demonstrates DOM manipulation, event handling, and dynamic rendering of components — without any frameworks or libraries.

---

## 🧭 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Visual](#liveDemo)
- [Project Structure](#project-structure)
- [Core Logic Explained](#core-logic-explained)
  - [Book Constructor](#1-book-constructor)
  - [Event Handlers](#2-event-handlers)
  - [UI Creation Functions](#3-ui-creation-functions)
- [App Flow](#app-flow)
- [Data Handling](#data-handling)
- [Improvements](#improvements)
- [Technologies Used](#technologies-used)
- [Summary](#summary)

---

## ⚡ Overview

The **Library Management App** allows users to:
- Add new books by title, author, and page count.  
- Toggle whether a book has been read or not.  
- Remove books from the library collection.  
- Dynamically display all books in a grid layout.  

Books are stored in a JavaScript array called `bookCollection`, and the DOM updates in real time as books are added, removed, or modified.

---

## ✨ Features

✅ Add new books through an interactive form.  
✅ Display all stored books as cards.  
✅ Toggle book state: **Read (YES)** or **Read (NO)**.  
✅ Remove books from the collection dynamically.  
✅ Real-time UI updates — no page reloads required.  
✅ Uses `crypto.randomUUID()` for unique book IDs.  

---

## Visual

[live demo](https://unggie.github.io/library/)

---

## 🧱 Project Structure

```
📁 library-app/
│
├── index.html          # Structure of the page and form
├── style.css           # Styling for form, container, and cards
└── script.js           # Main JavaScript logic (this file)
```

---

## ⚙️ Core Logic Explained

### 1️⃣ Book Constructor

```js
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.state = false;
}
```

Each book is created with:
- `title`: book title  
- `author`: book author  
- `pages`: total page count  
- `id`: a unique identifier for DOM updates  
- `state`: `false` by default, toggled when a book is marked as read  

Books are stored inside the `bookCollection` array.

---

### 2️⃣ Event Handlers

#### 📌 Form Event Listener

```js
form.addEventListener('click', (event) => {
    event.preventDefault();
    // Handles form submission and cancellation
});
```

Handles the **Submit** and **Cancel** buttons inside the form.

**Submit flow:**
1. Validate form fields.  
2. Add a new book using `addBookToLibrary()`.  
3. Hide form and show the book container.  
4. Refresh UI and reset form fields.

**Cancel flow:**
- Hides the form and returns to the main grid.

---

#### 📌 Container Event Listener

```js
container.addEventListener('click', (event) => {
    switch (event.target.id) {
        case "add-book":
            // Show form
        case "read":
            // Toggle read state
        case "remove":
            // Remove a book card
    }
});
```

This listener handles three main actions:
- **Add Book**: Shows the input form.  
- **Read Toggle**: Flips a book’s `state` between true and false.  
- **Remove**: Deletes a book card and updates the `bookCollection` array.

---

### 3️⃣ UI Creation Functions

#### 🧩 `createAppendElement(book)`
Creates a book card dynamically using DOM methods and appends it to the container.

Each card includes:
- Title, Author, and Page Count.  
- Buttons for **Read (toggle)** and **Remove**.

#### ➕ `createAddBtn()`
Creates a standalone “Add Book +” button to append at the end of the grid.

#### 📚 `addBookToLibrary()`
```js
function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages);
    bookCollection.push(book);
}
```
Adds a new book object to the main array.

---

## 🔄 App Flow

1. Initial demo books are added to the collection.  
2. The app renders all existing books as cards using `createAppendElement()`.  
3. The “Add Book +” button opens the form.  
4. The form submission adds a new book and re-renders the grid.  
5. The “Read” button toggles the book’s read state.  
6. The “Remove” button deletes a book card and updates the collection.

---

## 🗂️ Data Handling

All data is stored in-memory within the `bookCollection` array.

Each time a change occurs (add, read toggle, or remove):
- The array is updated.
- The DOM is completely re-rendered using `container.replaceChildren()`.

> ⚠️ Note: This implementation does not yet use `localStorage` — refreshing the page resets the collection.

---

## 🚀 Improvements

- ✅ Persist data using **localStorage** or **IndexedDB**  
- ✅ Replace constructor with a **factory function or ES6 class**  
- ✅ Add **search or filter functionality**  
- ✅ Include **book cover images or categories**  
- ✅ Use **CSS grid animations or transitions** for smoother rendering  
- ✅ Implement form validation feedback directly in the UI  

---

## 🧰 Technologies Used

- **HTML5** – for page structure  
- **CSS3** – for layout and design  
- **JavaScript (ES6)** – for logic and interactivity  

---

## 🏁 Summary

This **Book Library App** is an excellent example of DOM manipulation and event-driven JavaScript design.  
It demonstrates how to:
- Dynamically create and update HTML elements
- Handle multiple event listeners cleanly
- Manage an in-memory data collection efficiently

It serves as a strong base for expanding into more advanced CRUD or localStorage-based applications.
