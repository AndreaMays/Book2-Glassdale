import { getCriminals, useCriminals } from "./CriminalDataProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionDataProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilityProvider.js";

// import { useOfficers } from "../officers/OfficerProvider.js"

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")


export const CriminalList = () => {

  getCriminals()
    .then(getCriminalFacilities())
    .then(getFacilities())
      // Pull in the data now that it has been fetched
    .then(() => {
      const criminalsArray = useCriminals()
      const facilities = useFacilities()
      const crimFacility = useCriminalFacilities()
      renderToDom(criminalsArray, crimFacility, facilities)

    })
}
// is line 23 correct?
// Below: in the chapter why is "allFacilities" and "allrelationships" passed as a parameter? Instead of the variables "facilities" and "facilityRelationshipsForThisCriminal"?
// "facilities" variable is not lit up? But i'm not sure why
// is line 34 (parameter of the map) correct? Are we pulling that from criminal.js


const renderToDom = (criminalCollection, crimFacilityJoinTable, facilityCollection) => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    
        const facilityRelationshipsForThisCriminal = crimFacilityJoinTable.filter(criminalFacility => criminalFacility.criminalId === criminal.id)
        const allFacilities = facilityRelationshipsForThisCriminal.map(criminalFacility => {
        const matchingFacilityObject = facilityCollection.find(facility => facility.id === criminalFacility.facilityId)
          return matchingFacilityObject
  })
  criminalsHTMLRepresentations += Criminal(criminal, allFacilities)
}
 
 
// iterate through the criminals below with for loop

  criminalsContainer.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>`
}


// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
  if (event.detail.crimeThatWasChosen !== "0") {
    /* 
      We have the the id of the conviction that the user selected from the drop down (event.target.crimeThatWasChosen). But each criminal object has the name of the crime they were convicted for. So we need to get the name of the conviction associated with the unique identifier. To get the name, we get the conviction object which has the property for name. 
    */

    // Get a copy of the array of convictions from the data provider
    const convictionsArray = useConvictions()

    // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
    const convictionThatWasChosen = convictionsArray.find(convictionObj => {
      return convictionObj.id === parseInt(event.detail.crimeThatWasChosen)
    })

    /*
        Filter the criminals application state down to the people that committed the crime
    */

    // Get a copy of the array of criminals from the data provider
    const criminalsArray = useCriminals()

    /*
      Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
    */
    const matchingCriminalsArray = criminalsArray.filter(criminalObj => {
      return criminalObj.conviction === convictionThatWasChosen.name
    })

    /*
        Then invoke render() and pass the filtered collection as
        an argument
    */

    renderToDom(matchingCriminalsArray)
  }
})

eventHub.addEventListener("officerSelected", event => {
  if (event.detail.selectedOfficerName !== "0") {
    // get name of officer from event detail
    const officerName = event.detail.selectedOfficerName
    // filter criminals array and find all criminals arrested by selected officer
    const matchingOfficersArray = useCriminals().filter( criminal => criminal.arrestingOfficer === officerName)
    // debugger
    
        // pass filtered array into render to dom function
      
            
            renderToDom(matchingOfficersArray)
    } 

})

eventHub.addEventListener("witnessesClicked", () => {
  criminalsContainer.innerHTML = ""
})