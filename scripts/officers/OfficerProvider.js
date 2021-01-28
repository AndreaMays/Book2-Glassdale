let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    
    fetch ("https://criminals.glassdale.us/officers")
    .then(/*this side is taco*/response => response.json()) /*this ".then" waits for the "get fecth" http to run. Then when the info sent this line will run*/
    .then(officersArray => { /*this ".then" waits for line to 9's ".then" to run.*/
        // console.log(parsedResponse)
        officers = officersArray
     }) 
}

//Line 9 inside the ".then()" is a single line function expression. The "Return" is implicit.
//as a coder you NEVER call this code because javascript will call it when the request is done. I never call it myself
//You will ALWAYS have to do "Response.json()" to access the information. 
/*to access the data in the http request "parsed Response"*/