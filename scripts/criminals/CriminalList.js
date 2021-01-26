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