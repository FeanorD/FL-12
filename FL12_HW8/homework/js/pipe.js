'use strict';

function addOne(x) {
    return x + 1;
}
function pipe(number, ...functions) {
    let result = number;

    for (let f of functions) {
        result = f(result);
    }

    return result;
}

pipe(1, addOne, addOne);