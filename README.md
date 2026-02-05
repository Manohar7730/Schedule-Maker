# Schedule Maker

Schedule Maker is a minimal React-based schedule & task management application with persistent storage using browser localStorage.
V1 focuses on simplicity, clean architecture, and core React fundamentals.

Live Demo: https://schedulemake.netlify.app/

---

## Features

- Add schedules with title and description
- Input validation (no empty values)
- Duplicate schedule prevention
- Mark schedules as completed
- Delete schedules
- Persistent storage using localStorage
- Accessible UI with aria-labels
- Clean component-based architecture

---

## Tech Stack

- React (Hooks, Functional Components)
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- Netlify (Deployment)

---

## Repository Structure

/src
  /components
    Form.jsx
    List.jsx
    Schedule.jsx
  /hooks
    useLocalStorage.jsx
  App.jsx
  main.jsx
  index.css

---

## Quick Local Setup

Prerequisites

- Node.js 18+
- npm

Setup

git clone https://github.com/your-username/schedule-maker.git
cd schedule-maker
npm install
npm run dev

Build for production

npm run build

---

## Deployment

Frontend (Netlify)

- Build Command: npm run build
- Publish Directory: dist

---

## Architecture Notes

- App component manages core state and logic
- Presentational components handle UI only
- Custom useLocalStorage hook encapsulates persistence logic
- Functional updates used to prevent stale state issues

---

## Learning Objectives

- Controlled form handling
- State lifting & immutability
- Custom hooks
- Conditional rendering
- Client-side persistence
- Git-based workflow

---

## License

@Manohar_Pediredla
