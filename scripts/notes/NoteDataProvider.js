const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const useNotes = () => notes.slice()

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(jsonNotes => {
            notes = jsonNotes
        })

}

export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)
    debugger
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getNotes) // fetch the notes collection containing the newly added note
    .then(dispatchStateChangeEvent) // tell any component listening that the notes state has been updated
}





//STEP 1: Fetch is now local host NOT Glassdale API
//Step 2: getNotes() will execute fetch on "http://localhost:8088/notes"
//Step 3: This specific dataProvider will be more functional and have the ability to modify the API state by using the POST verb on a fetch call.
