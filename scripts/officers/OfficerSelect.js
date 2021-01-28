import { useConvictions, getOfficers, useOfficers } from "./OfficerProvider";

const eventHub = document.querySelector(".")
const contentTarget = document.querySelector(".")

eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}

const render = officerCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${officerCollection.map(officers => `<option value="${officers.id}">${officers.name}</option>`).join("")
        }
        </select>
    `
}