import { getOfficers, useOfficers } from "./OfficerProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        const selectedOfficer = changeEvent.target.value
        const officerSelectedCustomEvent = new CustomEvent("officerSelected", {
            detail: {
                selectedOfficerName: selectedOfficer
            }
        })
        eventHub.dispatchEvent(officerSelectedCustomEvent)
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