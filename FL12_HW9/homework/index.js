function convert(...chars) {
    let result = [];

    for (let char of chars) {
        if (typeof char === 'string') {
            result.push(Number(char));
        } else {
            result.push(String(char));
        }
    }
    
    return result;
}

function executeforEach(elements, func) {
    for (let elem of elements) {
        func(elem);
    }
}

function mapArray(elements, func) {
    let result = [];

    for (let elem of elements) {
        result.push(func(Number(elem)));
    }

    return result;
}

function filterArray(elements, func) {
    let result = [];

    executeforEach(elements, value => {
        if (func(value)) {
            result.push(value);
        }
    })

    return result;
}

function flipOver(inputString) {
    let flippedString = '';

    for (let charIndex = inputString.length - 1; charIndex >= 0; charIndex--) {
        flippedString += inputString[charIndex];
    }

    return flippedString;
}

function makeListFromRange(range) {
    let resultList = [];

    for (let rangeValue = range[0]; rangeValue <= range[1]; rangeValue++) {
        resultList.push(rangeValue);
    }

    return resultList;
}

function getArrayOfKeys(objects, property) {
    let resultList = [];

    executeforEach(objects, value => {
        resultList.push(value[property]);
    });

    return resultList;
}

function substitute(inputNumbers) {
    const minBoundaryNumber = 30;
    return mapArray(inputNumbers, value => {
        if (value < minBoundaryNumber) {
            return '*';
        } else {
            return value;
        }
    });
}

function getPastDay(srcDate, daysAmount) {
    let resultDate = new Date(srcDate.getTime());

    resultDate.setDate(resultDate.getDate() - daysAmount);

    return resultDate.getDate();
}

function formatDate(srcDate) {
    let resDate = {
        minutes: srcDate.getMinutes(),
        hours: srcDate.getHours(),
        day: srcDate.getDate(),
        month: srcDate.getMonth(),
        year: srcDate.getFullYear()
    };     

    let resultFormat = 
        `${resDate.year}/${resDate.month}/${resDate.day} ` +
        `${resDate.hours < 10 ? '0' + resDate.hours : resDate.hours}` +
        `:${resDate.minutes < 10 ? '0' + resDate.minutes : resDate.minutes}`;
    
    return resultFormat;
}


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 } 
];
const date = new Date(2019, 0, 2);
  
console.log(convert('1', 2, 3, '4'));

executeforEach([1,2,3], function(el) {
    console.log(el * 2) 
});

console.log(mapArray([2, '5', 8], function(el) {
    return el + 3 
}));

console.log(filterArray([2, 5, 8], function(el) {
    return el % 2 === 0 
}));

console.log(flipOver('hey world'));
console.log(makeListFromRange([2, 7]));
console.log(getArrayOfKeys(actors, 'name'));
console.log(substitute([58, 14, 48, 2, 31, 29]));
console.log(getPastDay(date, 2));
console.log(formatDate(new Date('6/15/2018 09:15:00')));