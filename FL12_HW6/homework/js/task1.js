let isValid = false;
let a, b, c, x, x1, x2;

while (!isValid) {
    a = parseFloat(prompt("Please, enter 'a' value(not equlal to 9 0): "));
    if ( a === 0 || isNaN(a) || !isFinite(a)) {
        alert('Invalid input data');
        continue;
    }
    
    b = parseFloat(prompt("Please, enter 'b' value(not equlal to 0): "));
    if ( b === 0 || isNaN(b) || !isFinite(b)) {
        alert('Invalid input data');
        continue;
    }

    c = parseFloat(prompt("Please, enter 'c' value(not equlal to 0): "));
    if ( c === 0 || isNaN(c) || !isFinite(c)) {
        alert('Invalid input data');
        continue;
    }

    isValid = true;
}

const discriminant = Math.pow(b,2) - 4 * a * c;

if (discriminant < 0) {
    console.log('no solution');
} else if (discriminant === 0) {
    x = -b / (2 * a);
    console.log(`x = ${x}`);
} else {
    x1 = -(b + Math.sqrt(discriminant)) / (2 * a);
    x2 = -(b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`x1 = ${x1}\nx2 = ${x2}`);
}