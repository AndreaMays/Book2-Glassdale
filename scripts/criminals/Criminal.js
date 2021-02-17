import { ShowAssociatesButton } from "../associates/ShowAssociatesButton.js";


export const Criminal = (criminal, allFacilities) => {
    return `
    <div class="criminal__">
    <p class="__name">Name: ${criminal.name}</p>
    <p class="__age">Age: ${criminal.age}</p>
    <p class="__age">Age: ${criminal.facilityName}</p>
    <p class="__conviction">Conviction: ${criminal.conviction}</p>
    <p class="__arrestingOfficer">Arresting Officer: ${criminal.arrestingOfficer}</p>
    <p class="__incarceration">Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="__incarceration">End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    ${ShowAssociatesButton(criminal)}
    <div>
        <h2>Facilities</h2>
        <ul>
            ${allFacilities.map(f => `<li>${f.facilityName}</li>`).join("")}
        </ul>
    </div>
    </div>
    

    `
}
    

// ${criminal.id}
// Chapter16 Make the HTML Representation display Facilities on card
// You want each criminal card to show the facility where the criminal spent time
// Then update "CriminalList" component to get the data