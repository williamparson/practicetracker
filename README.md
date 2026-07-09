# Practice Tracker

A simple React app for logging music (or any skill) practice sessions. Each entry stores the date, duration in minutes, and a short description. Sessions are saved in your browser with localStorage, so your log persists between visits without an account or server.

Live demo: [https://williamparson.github.io/practicetracker](https://williamparson.github.io/practicetracker)

## Features

- Add practice sessions through a modal form with date picker
- View all sessions in a sortable table (newest first)
- See a running total of sessions and minutes practiced
- Data stored locally in the browser — no backend required
- Deployable to GitHub Pages

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (Node 17+ requires the OpenSSL legacy provider flag, which is already configured in the npm scripts)

### Installation

```bash
git clone https://github.com/itswillum/practicetracker.git
cd practicetracker
npm install
```

### Development

Start the local dev server:

```bash
npm start
```

The app opens at [http://localhost:3000/practicetracker](http://localhost:3000/practicetracker) (the `/practicetracker` path comes from the GitHub Pages homepage setting in `package.json`).

### Production Build

```bash
npm run build
```

Output goes to the `build/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the app and publishes it to the `gh-pages` branch.

## How to Use the App

### 1. Open the app

Run `npm start` locally, or visit the [live demo](https://williamparson.github.io/practicetracker).

### 2. Add a practice session

1. Click **Add practice**.
2. Pick the **date** of your session (defaults to today; future dates are disabled).
3. Enter **how many minutes** you practiced (required, must be at least 1).
4. Write a **description** of what you worked on (required).
5. Click **Submit**.

The modal closes automatically and your new entry appears at the top of the list without reloading the page.

### 3. Review your log

The main page shows:

| Column | Content |
|--------|---------|
| Date | Month/Day/Year of the session |
| Minutes | Duration of the session |
| Description | What you practiced |

Above the table you'll see a summary like `3 sessions logged · 90 total minutes`.

### 4. Close the form without saving

- Click **Close** inside the modal, or
- Click the dark backdrop outside the modal.

### 5. Where your data lives

Sessions are stored in your browser under the key `practice-tracker-practices` in localStorage. Clearing site data for this domain will remove your log.

## Project Structure

```
src/
├── App.js                    # Root component
├── components/
│   ├── MainPage.js           # Loads and displays practice sessions
│   ├── CreateLog.js          # "Add practice" button and modal state
│   ├── PracticeFormModal.js  # Modal wrapper for the form
│   ├── PracticeFormBackdrop.js
│   ├── PracticeForm.js       # Date, duration, and description inputs
│   ├── FormHandler.js        # Saves new sessions via storage service
│   └── TableEntry.js         # Single row in the practice log table
└── services/
    └── practiceStorage.js    # localStorage read/write helpers
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `digital envelope routines::unsupported` on build | Use `npm run build` — the script includes the OpenSSL legacy provider flag |
| Practice list is empty after refresh | Check that localStorage is enabled and you haven't cleared site data |
| App loads at wrong URL locally | The homepage is set for GitHub Pages; use `http://localhost:3000/practicetracker` |

## Credits

UI patterns adapted from the [Academind React Complete Guide](https://youtu.be/Dorf8i6lCuk) (January 2023).

Date picker: [react-datepicker](https://github.com/Hacker0x01/react-datepicker)
