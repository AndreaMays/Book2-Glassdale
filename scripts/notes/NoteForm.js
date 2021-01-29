import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
             <label for="dateOf">Date</label>
            <input type="date" name="noteDate" id="noteDate"></input>

            <label for="suspect">Suspect</label>
            <input type="text" name="noteSuspect" id="noteSuspect"></input>
   
            <label for="entryNotes">Notes</label>
            <input type="text" name="entryNote" id="noteEntry"></input>
    
            <label for="author">Author</label>
            <input type="text" name="noteAuthor" id="noteAuthor"></input>

            <label for="intuition">Intuition</label>
            <input type="text" name="noteAuthor" id="noteIntuition"></input>

    
            <button type="submit" value="submit" id="saveNote">Save Note</button>
        `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
            // debugger test everything to this point of line 36
        // Make a new object representation of a note
        const suspect = document.querySelector("#noteSuspect").value
        // const suspect = document.getElementById("#noteSuspect") this "getElementById" works for line 39 as well
        const author = document.querySelector("#noteAuthor").value
        const intuition = document.querySelector("#noteIntuition").value
        const date = document.querySelector("#noteDate").value
        const note = document.querySelector("#noteEntry").value

        const newNote = {
            "text": note,
            "suspect": suspect,
            "date": date,
            "author": author,
            "intuition": intuition
        }

        // Change API state and application state
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