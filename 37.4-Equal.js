/**
 * 37-4 double equal (==) vs triple equal (===), implicit conversion
 * N>B> Alwasy use === instead of ==
 */

const doubleEqual = (a, b) => {
    if (a == b) {
        console.log('a == b');
    } 
    else {
        console.log('a != b') 
    }
}

const thripleEqual = (x, y) => {
    if (x === y) {
        console.log('x === y');
    } 
    else {
        console.log('x !== y') 
    }
}

/**
 * Behind the scene == does type coercion / type conversion / type casting
 */

const a = 0;
const b = false;
console.log(doubleEqual(a, b)); // a == b

const a1 = 1;
const b1 = true;
console.log(doubleEqual(a1, b1)); // a == b

const a2 = 2;
const b2 = '2';
console.log(doubleEqual(a2, b2)); // a == b

/**
 * === is safe for premitive value comparison; cause it check the value along with the type of value 
 */
const x = 0;
const y = false;
console.log(thripleEqual(x, y)); // x !== y

const x1 = 1;
const y1 = true;
console.log(thripleEqual(x1, y1)); // x !== y

const x2 = 2;
const y2 = '2';
console.log(thripleEqual(x2, y2)); // x !== y

const x3 = 2;
const y3 = 2;
console.log(thripleEqual(x3, y3)); // x === y

