import { Criminal } from './Criminal.js';
import { getCriminals, useCriminals } from './CriminalDataProvider.js';
// getCriminals()
// useCriminals()

export const CriminalList = () => {
    let contentElement = document.querySelector(".criminalsContainer")
    getCriminals().then(() => {
        const criminalsArray = useCriminals();
    
        
        let criminalHTMLRepresentations = ""
    
    
     
         for ( const criminal of criminalsArray) {
             console.log(criminal)
             criminalHTMLRepresentations += Criminal(criminal)
        }
     
     contentElement.innerHTML += `
     <h3>Criminals</h3>
     <div class ="criminals">
     ${criminalHTMLRepresentations}
     </div>
     `
    })

}

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const criminalsArray = useCriminals()
        const matchingCriminals = criminalsArray.filter()

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})
