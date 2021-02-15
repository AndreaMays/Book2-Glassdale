// import { Criminal } from "../criminals/Criminal.js"
import { saveNote } from "./NoteDataProvider.js"
// import { criminalSelect } from "../criminals/CriminalSelect.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";
getCriminals()

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


// Calling 


// const criminalSelect = () => {

//     getCriminals()
//       .then(() => {
//         const criminal = useCriminals()
//         renderToDom(criminal)
  
//       })
//   }

  const render = (criminalSelectArray) => {
    contentTarget.innerHTML = `
             <label for="dateOf">Date</label>
            <input type="date" name="noteDate" id="noteDate"></input>

            <label for="entryNotes">Notes</label>
            <input type="text" name="entryNote" id="noteEntry"></input>
    
            <label for="author">Author</label>
            <input type="text" name="noteAuthor" id="noteAuthor"></input>

            <label for="intuition">Intuition</label>
            <input type="text" name="noteAuthor" id="noteIntuition"></input>

            <select id="noteForm--criminal" class="criminalSelect">
            <option value=0>Please Selecte a Criminal...</option>
            ${
                criminalSelectArray.map(criminal => {
                    return `<option value="${criminal.id}">${criminal.name}</option>`
                })
            }
                
            </select>
            <button type="submit" value="submit" id="saveNote">Save Note</button>
        `
}

// chapter 13 goal is "criminalId" on the note
// change the note form: instead of text input field, use a select element
// select element will have an <option> element for each criminal
// Line 38 and 39 is the new "Select" dropdown for 


export const NoteForm = () => {
    getCriminals()
    .then(()=> {
        const criminalSelectArray = useCriminals()
        render(criminalSelectArray)
    })
}

// Handle browser-generated click event in component. With "listner click "
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // check for ID of of button line 67
        // const suspect = document.querySelector("#noteSuspect").value
        // const suspect = document.getElementById("#noteSuspect") this "getElementById" works for line 39 as well
        const author = document.querySelector("#noteAuthor").value
        const intuition = document.querySelector("#noteIntuition").value
        const date = document.querySelector("#noteDate").value
        const note = document.querySelector("#noteEntry").value
        const criminalId= document.querySelector("#noteForm--criminal").value
        
        // debugger test everything to this point of line 36
    // Make a new object representation of a note

    // Make new "NewNote" object
        const newNote = {
            "text": note,
            // "suspect": suspect,
            "date": date,
            "author": author,
            "intuition": intuition,
            "criminalId": parseInt(criminalId)
        }

        // Change API state and application state
        // Line92 invoke "saveNote" function with the "newNote" in the argugement
        saveNote(newNote)
    }
})

// const NoteForm = () => {
//     text: note,
//     "suspect": suspect,
//     "date": date,
//     "author": author,
//     "intuition": intuition
// }