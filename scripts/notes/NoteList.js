import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";

// Query the DOM for the element that your notes will be added to 
// Line 7 is the exact location target we want to render the information when the functions execute
const contentTarget = document.querySelector(".noteListContainer")
// Define ye olde Evente Hubbe
// Line 9 is the main container of the HTML document where we are building our app
const eventHub = document.querySelector(".container")

// STEP 7 (cont'd): LISTEN for the "customEvent" from Shownotesbutton.js line 16
// listener is listening for "showNotesClicked" (which has to match the customEvent name in Shownotesbutton.js line 16)
// the blue "customEvent" is not lit because there is no payload/or details being used in that function. See "Officer Select" component lines 9-15 to understand "payload"
// Then we call or invoke the "NoteList()" function 
// The "noteList()" call moves us to line 37
eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

// Step 9: One we have called the "render()" function on line 55, it tells this function to run. 
// The arguements passed in the call function on line 55 now take the place of the parameters on line 21, passing in new arrays.
// Then we set a new variable "relatedCriminalObject" and inside of that we are mapping through the note array (.map()returns a new array)
// inside of the ".map()" we pass "noteObject" as a parameter with a callback function. 
// inside the callback function  we have a new variable "relatedCriminalObject". In that variable is the ".find()" being used on the "criminalArray".
// The ".find()" is finding the criminal id and matching it exactly to the "criminalId" on notes. This is a "1 to many relationship". Because 
// we have 1 criminal matching to a possibly many different "notes".
// Once the ".find()" is done it sets it into the relateCriminalObject variable.
// The ".map()" returns a new arry and sets it into "allNotesConvertedToString" variable.
// The "return" on line 33 is for the ".map()" (not the NoteHTMLConverter), because the ".map()" is returning a new array
// The ".join()" is used to turn the new array to one giant string
// STEP 10 "ContentTarget.innerhtml" then runs building out the HTML with the header and rendering the returned information to this section of HTML
const render = (noteArray, criminalArray) => {
    const allNotesConvertedToStrings = noteArray.map( noteObject => {
        const relatedCriminalObject = criminalArray.find(criminal => criminal.id === noteObject.criminalId)
        debugger
        return NoteHTMLConverter(noteObject, relatedCriminalObject)
    }
        
    ).join("")

    contentTarget.innerHTML = `
        <h3>Case Notes</h3>
        <section class="notesList">
        ${allNotesConvertedToStrings}
        </section>
    `
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
// STEP 8: Function got called on line 16 which runs "NoteList" function:
// Inside this function we: 1. we call the "getNote()" function which calls the function "getNotes" in the Data Provider line 13
// which runs the "api" for getting the notes
// ".then(getCriminals)": has to wait on the api to pull the notes. Then we use the .then() and pass in the "getCriminal" as an argument
// "getCriminals" came from the function in CriminalDataProvider
// After we get the criminals then we run another ".then()" with a call back function. This call back function
// calls "useNotes()" array from "NoteDataProvider" and "useCriminal" array from "Criminal Data Provider". and we set these two array's two new variables.
// Then we call the render function and pass in "allnotes" and "everyCriminal" as arguments:
// "allNotes" and "everyCriminal" variables live only in this function because they are inside of the curly brackets. Therefore, they must be passed as arguments to be accessed in other functions.
// Jisie in lecture time did set the variable outside of the function to empty arrays...and then deleted the render arguments because now the variables are in the global scope. But I will leave my code the same for now. 
// STEP 9: THE RENDER call on line 54 sends us to Line 19
const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const allNotes = useNotes()
            const everyCriminal = useCriminals()
            render(allNotes, everyCriminal)
        })
}

eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
})

// const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})
