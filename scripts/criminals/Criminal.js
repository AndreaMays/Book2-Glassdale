import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js";


export const Criminal = (criminal) => {
    return `
    <div class="criminal__">
    <p class="__name">Name: ${criminal.name}</p>
    <p class="__age">Age: ${criminal.age}</p>
    <p class="__conviction">Conviction: ${criminal.conviction}</p>
    <p class="__arrestingOfficer">Arresting Officer: ${criminal.arrestingOfficer}</p>
    <p class="__incarceration">Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="__incarceration">End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    ${ShowAssociatesButton(criminal)}
    </div>
    `
    
}

// ${criminal.id}