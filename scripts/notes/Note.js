export const NoteHTMLConverter = (noteObject, criminalObject) => {
    // debugger
    return `
        <section class="note">
            <div class="note__text">${ noteObject.text }</div>
            <div class="note__suspect">Title: ${ criminalObject.name }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__intuition">Intuition: ${ noteObject.intuition}</div>
            <div class="note__start date">Start Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <div class="note__end date">End Date: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        
            <button id="deleteNote--${noteObject.id}">Delete</button>

            </section>
    `
}