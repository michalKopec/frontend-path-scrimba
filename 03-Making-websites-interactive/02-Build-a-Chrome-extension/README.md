# Leads Tracker - Chrome Extension

## Project Overview

A Chrome extension that allows users to save and track URLs (leads) either by manually entering them or by capturing the current browser tab. Data persists across browser sessions using local storage.

## What This Project Teaches

### Core JavaScript Concepts
- **const vs let**: Using `const` for variables that won't be reassigned (DOM elements, functions)
- **Parameters & Arguments**: Creating reusable functions by passing data through parameters
- **Template Strings**: Multi-line strings and variable interpolation using backticks and `${}`
- **JSON Methods**: Converting between JavaScript arrays and JSON strings using `JSON.stringify()` and `JSON.parse()`

### DOM Manipulation
- **addEventListener()**: Attaching event handlers directly in JavaScript instead of inline HTML
- **innerHTML**: Rendering HTML elements dynamically (required for `<li>` tags, unlike `textContent`)
- **input.value**: Accessing and clearing user input from form fields
- **localStorage**: Browser-based data persistence across page refreshes

### Chrome Extension Basics
- **manifest.json**: Extension configuration file
- **chrome.tabs API**: Accessing information about the current browser tab

## Features

- **Save Input**: Manually enter and save URLs
- **Save Tab**: Capture current browser tab URL with one click
- **Delete All**: Double-click to clear all saved leads
- **Persistent Storage**: Data saved in localStorage survives browser restarts
- **Clickable Links**: All saved URLs open in new tabs

## File Structure

```
├── manifest.json       # Chrome extension configuration
├── index.html          # Extension popup interface
├── index.css           # Styling
├── index.js            # Core functionality
├── icon.png            # Extension icon
└── package.json        # Vite configuration
```

## Key Code Patterns

### Event Listeners
```javascript
// No onclick in HTML - all event handling in JS
inputBtn.addEventListener("click", function() {
    // Handle click
})
```

### Local Storage Workflow
```javascript
// Save: JS array → JSON string → localStorage
localStorage.setItem("myLeads", JSON.stringify(myLeads))

// Retrieve: localStorage → JSON string → JS array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
```

### Template Strings for HTML
```javascript
listItems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>
`
```

### Reusable Functions with Parameters
```javascript
function render(leads) {
    // 'leads' is the parameter - makes function reusable
    // Can be called with different arrays
}

render(myLeads) // 'myLeads' is the argument passed in
```

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the project directory

## Usage

1. Click the extension icon in your Chrome toolbar
2. **To save current tab**: Click "SAVE TAB"
3. **To save custom URL**: Type in the input field and click "SAVE INPUT"
4. **To delete all leads**: Double-click "DELETE ALL"
5. Click any saved link to open it in a new tab

## Technical Notes

- **Double-click deletion**: Prevents accidental data loss
- **Chrome tabs API**: Requires `activeTab` permission (configured in manifest.json)
- **Array of objects**: The Chrome tabs API returns `tabs[0].url` - an array containing an object
- **innerHTML requirement**: `textContent` can't render HTML elements, only plain text

## Why These Patterns Matter

This project introduces patterns you'll see repeatedly in web development:

- JSON is everywhere (APIs, config files, data transfer)
- Template strings are the modern way to build HTML strings
- localStorage is your first "database" - simple but demonstrates persistence
- Event listeners separate HTML structure from JavaScript behavior
- Parameters make functions flexible and reusable


**Note**: This is a learning project designed to teach fundamental web development concepts through practical application. The extension uses localStorage (not a server/cloud database), so leads are stored only on your local machine.
