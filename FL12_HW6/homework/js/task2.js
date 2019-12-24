let isValid = false;
let a, b, c;

while (!isValid) {
    a = parseInt(prompt("Please, enter 'a' value(should be above 0): "));
    b = parseInt(prompt("Please, enter 'b' value(should be above 0): "));
    c = parseInt(prompt("Please, enter 'c' value(should be above 0): "));
    const isNotNum = isNaN(a) || !isFinite(a);
    const isEqualToZero = a === 0 || b === 0 || c === 0;

    if (isNotNum) {
        alert('input values should be ONLY numbers');
        continue;
    }
    if (isEqualToZero) {
        alert('A triangle must have 3 sides with a positive definite length');
        continue;
    }

    isValid = true;
}

const isNotExist = a + b <= c || b + c <= a || c + a <= b;
const isEquilateral = a === b && b === c;
const isIsosceles = a === b || b === c || c === a;

if (isNotExist) {
    alert('Triangle doesn’t exist');
} else if (isEquilateral) {
    alert('Equilateral triangle’');
} else if (isIsosceles) {
    alert('Isosceles triangle');
} else {
    alert('Scalene triangle');
}