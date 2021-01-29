// import {useOfficers} from './officers/OfficerProvider.js'
// import { getConvictions, useConvictions } from './convictions/ConvictionDataProvider.js';
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { CriminalList } from './criminals/CriminalList.js';
import { NoteForm } from './notes/NoteForm.js';
import { ShowNoteButton } from './notes/ShowNotesButton.js';
import { OfficerList } from './officers/OfficerList.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import "./notes/NoteList.js"
// import { saveNote } from './notes/NoteDataProvider.js';

CriminalList()
ConvictionSelect()
OfficerSelect()
OfficerList
//CHAPTER 7 FUNCTION CALLS///
NoteForm()
ShowNoteButton()

// useOfficers()
// useConvictions()
// getConvictions()
// .then(( => console.log(useConvictions)))



///TESTING newNote() for API POST request DO NOTE IMPORT TO MAIN.JS Permanently.
// const newNote = {
//     "text":"",
//     "suspect": "",
//     "date": "",
//     "author": "",
//     "intuition": ""
// }
// saveNote(newNote)