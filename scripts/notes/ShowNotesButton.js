// 1st in the process the queryselector is getting a reference to an element with the class of "noteListButton" and sets it to Content target
// 2nd the queryselector does the same for "eventHub"

const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")


// step 6: Create an eventListener witha  callback function
// the callback function uses the "innerHTML"(target) and the "id" on line 21 which is "ShowNotes"
// Then we create a varaible named "customEvent" which uses a "new custom Event". And we name the "new custom Event" "shownotesClicked"
// a "new CustomEvent" is a "constructor". On line 15 we create the custom event
// line 16 broadcast / dispatch custom event
// STEP 7: TAKES US TO 'NOTELIST.JS' COMPONENT TO LISTEN FOR THE CUSTOM EVENT
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

// 3rd export the function "shownoteButton"
// 4th step call the function on main.js
// 5th go up to "eventListener" on line 
export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}

// The id from line 24 is the id of element on which the event happened on line 14 (and only if that's true does 15 and 16 run)

