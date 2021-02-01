import { useCriminals } from "../criminals/CriminalDataProvider.js"

export const AssociatesList = (criminal) => {
    const contentContainer = document.querySelector(".associatesContainer")
    console.log(criminal)
    
    const HTMLRep = `
   <h1>Known associates for ${criminal.name}</h1>
    ${criminal.known_associates.map(associate => {
    return `<section class="associate__container">
    <div class="associate__name">${associate.name}</div>
    <div class="associate__alibi">Alibi: ${associate.alibi}</div>
   </section>`
}).join("")}`
    contentContainer.innerHTML = HTMLRep
}
    
const eventHub = document.querySelector(".container")
eventHub.addEventListener("AssociatesClicked", event => {
    console.log("event", event)
    const selectedCriminalID = event.detail.criminalID
    const criminalsArray = useCriminals()
    const selectedCriminal = criminalsArray.find((criminal) => criminal.id === selectedCriminalID)
    console.log('selectedCriminal: ', selectedCriminal)
    AssociatesList(selectedCriminal)
})