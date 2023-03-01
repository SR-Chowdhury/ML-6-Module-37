/**
 * 37-3 Different Truthy and Falsy values in JavaScript
 */

const checkTrueOrFalse = (args) => {
    // Check whether the value is true
    if (!!args) {
        console.log('Truthy Value');
    } 
    // Check whether the value is false
    else if(!args) {
        console.log('Falsy Value');
    }
}
/**
 * Truthy :
 * a) any string other than emty string ('') not ' '
 * b) any number other than 0
 * c) any array or empty array || any object or emty object
 * d) true
 */



// Truty (a)
const x1 = ' ';
const x2 = 'Hello';
// checkTrueOrFalse(x1, x2);

// Truthy (b)
const x3 = 5;
const x4 = 05;
const x5 = -5;
// checkTrueOrFalse(x3, x4, x5);

// Truthy (c)
const x6 = [];
const x7 = [2, 4];
const x8 = {};
const x9 = {age: 20};
// checkTrueOrFalse(x6, x7, x8, x9);

const y10 = true;
// checkTrueOrFalse(y10);


/**
 * Falsy:
 * a) 0 number 
 * b) undefined
 * c) null
 * d) empty string ''
 * e) false
 */

// Falsy (a)
// checkTrueOrFalse(0);

// Falsy (b)
let y;
// checkTrueOrFalse(y);

// Falsy (c)
let y1 = null;
// checkTrueOrFalse(y1);

// Falsy (d)
const y2 = '';
// checkTrueOrFalse(y2);

// Falsy (e)
const y3 = false;
checkTrueOrFalse(y3);

