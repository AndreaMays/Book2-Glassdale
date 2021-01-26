// The ConvictionProvider component will fetch those crimes and export a useConvictions() method for other components to import

let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
        1.Use fetch() to get data
        2. Parse data
        3. Put parsed response in convictions variable
    */
   return fetch("https://criminals.glassdale.us/crimes")
   .then(response => response.json())
   .then(convictionsArray => convictions = convictionsArray)

} 
// Line 18 middle "convictions" is the variable from Line 3
// ".then" expects a function definition or "Callback function"
