
import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"
import { Witness } from "./Witnesses.js"


const contentTarget = document.querySelector(".witnessesButton")
// import "./WitnessesList.js"

// Why does line 6 not take a parameter of "witness" where other functions it does take a parameter?
export const ShowWitnessesButton = () => {
  `<button id="showWitnessButton">Witness Button</button>`
}

contentTarget.addEventListener("click", (clickEvent) => {
    getWitnesses()
        .then(() => {
            const witnessesArray = useWitnesses()
            let witnessStatementHTMLRep = ""

            for (const witness of witnessesArray) {
                witnessStatementHTMLRep += Witness(witness)
            }
            document.querySelector(".witnessContainer").innerHTML = `
             <h3>Witness Statements</h3> 
             ${witnessStatementHTMLRep}          
        `
        })

})

// use "witnessesArray" on line 21 from line 18
// const eventHub = document.querySelector(".container")
// eventHub.addEventListener("click", (clickEvent) => {
//     if(clickEvent.target.id === "showWitnessButton") {
//         const clickedWitnessButton = new CustomEvent("witnessClicked")

//         eventHub.dispatchEvent(clickedWitnessButton)
//     }
    
// })



// pull witness statements in from API
// need a witness button outside of criminal card
// write a function for what the witness button should do
// add.eventlistner is for listening for the click