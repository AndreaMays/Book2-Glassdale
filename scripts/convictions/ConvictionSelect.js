/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionDataProvider.js"
import { getConvictions } from './ConvictionDataProvider.js';
// Get a reference to the DOM element where the <select> will be rendered
//This module is responsible for looping through the data and filling in the "select tag"
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")


// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // debugger
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
        .then(() => {
            // Get all convictions from application state
            const convictions = useConvictions()
            render(convictions)
        })
}

const render = convictionsCollection => {
    //  debugger
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    /*  The convictionsCollection.map() will iterate through an array that looks like this:
    // [
    //   {
    //     name: "arson",
    //     id: 1
    //   }, {
    //     name: "murder",
    //     id: 2
    //   },
    //   ...
        ] 
    */

    /* The new array that .map() returns will look like this:
    // [
    //   "<option value="1">arson</option>",
    //   "<option value="2">murder</option>",
    //   ...
        ] 
    */
contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(conviction => `<option value="${conviction.id}">${conviction.name}</option>`).join("")
        }
        </select>
    `
}


