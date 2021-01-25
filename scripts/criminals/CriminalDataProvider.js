let criminals = []

export const useCriminals = () => criminals.slice() /*single line function. "Return" word not needed because its implied */

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
   return fetch("https://criminals.glassdale.us/criminals")
   .then(response => response.json())
   .then(
       parsedCriminals => {
           console.table(parsedCriminals)
           criminals = parsedCriminals
       }
   )
}

// export const useCriminals = () => {
//     return criminals.slice()
// } (SAME AS LINE 3: THIS ONE IS JUST SPELLED OUT)

