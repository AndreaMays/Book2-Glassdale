const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <form action="" method="get" class="noteForm>
        <fieldset>
        <h3>Take Notes</h3>
            <label for="dateOf">Date of Entry</label>
            <input type="date" name="noteDate" id="dateOf"></input>

            <label for="suspect">Suspect</label>
            <input type="text" name="noteSuspect" id="suspect"></input>
   
            <label for="entryNotes">Notes</label>
            <textarea id="note-text" name="entryNote" row="5" cols="13" placeholder="Notes about case">></textarea>
    
        </fieldset>
        <button type="submit" value="submit" id="saveNote">Save Note</button>
        </form>`
}

export const NoteForm = () => {
    render()
}