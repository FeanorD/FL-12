'use strict';

function isBigger(num1, num2) {
    return num1 > num2;
}
function isSmaller(num1, num2) {
    return !isBigger(num1, num2);
}

isBigger(3, -4);
isSmaller(3, -4);