'use strict';

function makeNumber(encodedString) {
    let decodedString = '';
    
    for (let char of encodedString) {
        if (!isNaN(char)) {
            decodedString += char;
        }
    }

    return decodedString;
}

console.log(makeNumber('erer384jjjfd123'));