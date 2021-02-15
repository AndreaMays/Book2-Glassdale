let witnesses = []

export const useWitnesses = () => witnesses.slice()

export const getWitnesses = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
        1.Use fetch() to get data
        2. Parse data
        3. Put parsed response in convictions variable
    */
   return fetch("https://criminals.glassdale.us/witnesses")
   .then(response => response.json())
   .then(witnessesArray => witnesses = witnessesArray)

} 