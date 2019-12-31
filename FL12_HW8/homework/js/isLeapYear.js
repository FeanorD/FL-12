'use strict';

function isLeapYear(dateString) {
    let year = new Date(dateString).getFullYear();

    if (isNaN(year)) {
        return `Invalid Date`;
    } else if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2200-01-15 13:00:00'); 
isLeapYear(1213131313135465656654564646542132132131); 