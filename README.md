# Pagination Project

## 📖 Description
This project fetches character data from the Rick and Morty API and displays the results with pagination. Users can click buttons to navigate through the results in sets of 5 per page.

Originally, the project used the JSONPlaceholder blog API. It has since been updated to use the Rick and Morty API, which returns a **wrapped object** instead of a plain array.

## ✨ Features
- Displays 5 characters per page
- Next/Previous buttons for navigation
- 2-second rate limit between requests to simulate API throttling
- Loading spinner while fetching data
- Friendly error messages and UI feedback

## 🚀 How to Run
1. Clone the project or download the files.
2. Open `index.html` in your browser.
3. Click the **Next** or **Previous** buttons to navigate between pages.

## 🔄 Switched from JSONPlaceholder to Rick and Morty API
Instead of using this:
```js
// JSONPlaceholder example
const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`);

## Live Site
(Add your GitHub Pages link here)