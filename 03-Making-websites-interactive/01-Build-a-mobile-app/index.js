// Import Firebase app initialization function
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"

// Import Firebase database functions - these let us read/write data to Firebase
import { getDatabase,
ref,        // Points to a location in the database
push,       // Adds new data with auto-generated ID
onValue,    // Listens for changes in real-time
remove } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

// Your Firebase project's database URL
const firebaseConfig = {
    databaseURL: "https://scrimba-build-a-mobile-a-28d77-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

// Reference to "leads" location in database - like specifying a folder/table name
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
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

// Real-time listener - runs on page load AND whenever database data changes
// This is what makes Firebase "live" - no page refresh needed
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        // Firebase returns an object like {-N4q: "milk", -N4r: "bread"}
        // Object.values() converts it to array ["milk", "bread"]
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

// Double-click prevents accidental deletion
deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", function() {
    // push() saves to Firebase with auto-generated unique ID
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
})