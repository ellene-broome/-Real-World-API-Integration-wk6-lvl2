# Pagination Project

## 📖 Description
This project fetches characters from the Rick and Morty API and displays them with pagination (5 per page). You can use the buttons to navigate between pages.

## ✨ Features
- Displays 5 characters at a time
- Next/Previous buttons for navigation
- 2-second rate limit between requests to simulate API throttling
- Loading spinner while fetching data
- Friendly error messages and UI feedback
- Responsive design with Tailwind CSS

## Assignment Requirements
Assignment Requirements ✅
This project meets all the requirements from Week 6 - Day 3 Assignment: Real-World API Integration:

 - Uses a real-world paginated API (Rick and Morty API)

 - Implements client-side pagination

 - Includes Next and Previous buttons

 - Handles rate-limiting (2 second delay between clicks)

 - Uses async/await and try/catch/finally for error handling

 - Displays a loading spinner and helpful user messages

 - Applies responsive, mobile-first design with Tailwind

 - Bonus: hides Next/Previous buttons appropriately when on the first or last page

 - Bonus: scrolls back to the top of the page after navigation

## 🚀 How to Run
1. Open `index.html` in your browser.
2. Click the **Next** or **Previous** buttons to navigate between pages.

## 🔄 API Info
- Originally based on JSONPlaceholder:

const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`);

- Then changed to use the Rick and Morty API:

const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

- Note: The Rick and Morty API returns a wrapped object, so data.results must be sliced for pagination.

## 👩🏼‍💻 Credits

- Rick and Morty API: `rickandmortyapi.com`
- Tailwind CSS for styling
- Designed and coded by Ellene R broome
- W3schools.com for educational purposes
- OpenAI's ChatGPT for debugging & explaination, design questions and learning

## Emoji	Name	Why it fits
🌐 Live Site
(Add your GitHub Pages link here)