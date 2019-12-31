'use strict';

function getMin(...numbers) {
    return numbers.sort(function(a, b) {
        return a - b;
    })[0];
}

console.log(getMin(3, 0, -5, 10, -3, 2, -12));