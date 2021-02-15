// // import a statement
// // export a witness list

// import { useWitnesses, getWitnesses } from "./WitnessDataProvider.js"
// import { Witness } from "./Witnesses.js"



// const eventHub = document.querySelector(".witnessContainer")

// // why is line 12 -25 wrong when we've used it before??? UGH!!!!!!!
// // export const WitnessList = (witness) => {
// //     const contentContainer = document.querySelector(".witnessContainer")
// //     console.log(witness)
    
// //     const HTMLRep = `
// //    <h1>Known witnesses for ${criminal.name}</h1>
// //     ${witness.statement.map(witness => {
// //     return `<section class="witness__container">
// //     <div class="witness__name">${witness.name}</div>
// //     <div class="witness__statement">Witness ${witness.statement}</div>
// //    </section>`
// // }).join("")}`
// //     contentContainer.innerHTML = HTMLRep
// // }
    
// const WitnessList = () => {
//     getWitnesses()
//     .then(() => {
//         const witnessesArray = useWitnesses()
//         render(witnessesArray)
//     })
// }

// // WHY IS THIS WRONG?!?!?!?!?! ugh!!!!! lines 36 - 43... I don't understand
// // eventHub.addEventListener("witnessClicked", event => {
// //     console.log("event", event)
// //     const selectedWitnessID = event.detail.witnessID
// //     const witnessesArray = useWitnesses()
// //     const selectedWitness = witnessesArray.find((criminal) => witness.id === selectedWitness)
// //     console.log('selectedWitness: ', selectedWitness)
// //     AssociatesList(selectedCriminal)
// // })

// eventHub.addEventListener("witnessesClicked", () => {
//     WitnessList()
// })

// const render = (statementOfWitnessArray) => {
//     let witnessStatementHTMLRep = ""
//     for (const witness of statementOfWitnessArray) {
//         witnessStatementHTMLRep += statementOfWitnessArray(witness)

//         witnessesContainer.innerHTML = `
//             <h2>Witness Statements</h2>
//             <section class="WitnessList">
//                 ${witnessStatementHTMLRep}
//             </section>
//         `
//     }
// }