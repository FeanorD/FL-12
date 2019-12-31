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
function countNumbers(encodedString) {
    let resultSet = {}
    let decodedList = makeNumber(encodedString).split('').sort();

    for (let number = 0; number < decodedList.length; number++) {
        if (!(decodedList[number] in resultSet)) {
            resultSet[decodedList[number]] = 1;
        } else {
            resultSet[decodedList[number]]++;
        }
    }

    return resultSet;
}

countNumbers('erer384jj4444666888jfd123');