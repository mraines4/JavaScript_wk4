


function transl33t(originalString) {
    const leetDictionary = {
        // Keys are strings, just like in python
        // But in JS, quotes are optional
        A: '4',
        E: '3',
        G: '6',
        I: '1',
        O: '0',
        S: '5',
        T: '7'
    };
    let result = '';
    // loop through each letter in originalString
    // if its in the dictionary, and if it is
    // put its value in `result`
    for (let i = 0; i < originalString.length; i++) {
        let theLetter = originalString[i].toUpperCase();
        // console.log(theLetter);
        // console.log(leetDictionary[theLetter])
        if (leetDictionary[theLetter] !== undefined) {
            result += leetDictionary[theLetter];
        } else {
            // if not, just copy letter into `result`
            result += theLetter
        }
    }
    return result;
}

const addressBook = {
    DigitalCrafts: {
        phone: '404-123-1234', 
        address: '4323 Piedmont', 
        city: 'Atlanta'
    },
    'Chris Aquino': {
        phone: '404-555-1234', 
        address: '4321 Piedmont', 
        city: 'Atlanta'
    }
};