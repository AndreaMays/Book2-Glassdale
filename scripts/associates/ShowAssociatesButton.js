import "./AssociatesList.js"
export const ShowAssociatesButton = (criminal) => {
 return `<button id="associates--${criminal.id}">Associate Alibis</button>`
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("associates--")) {
    const [prefix, criminalID] = event.target.id.split("--")
    const customEvent = new CustomEvent("AssociatesClicked",{
        detail: {
            criminalID: parseInt(criminalID)
        }
    })
    console.log('customEvent: ', customEvent);
    eventHub.dispatchEvent(customEvent)
    }
})
