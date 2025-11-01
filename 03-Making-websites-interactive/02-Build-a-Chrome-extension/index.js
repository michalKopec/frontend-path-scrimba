// Array to store all saved leads
let myLeads = []

// Get references to DOM elements
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// Load saved leads from localStorage on startup
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// If there are saved leads, load them into the array and display
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// Save current browser tab URL when button clicked
tabBtn.addEventListener("click", function(){    
    // Chrome API to get active tab info
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// Render leads array as list items with clickable links
function render(leads) {
    let listItems = ""
    // Build HTML string for all leads
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

// Delete all leads on double-click (prevents accidental deletion)
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// Save manually entered input when button clicked
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" // Clear input field after saving
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})