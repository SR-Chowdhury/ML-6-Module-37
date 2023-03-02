/**
 * 37-8 (advanced) function arguments pass by reference pass by value
 */

/**
 * In primitive type arguments = pass by value
 */

let a = 10;
let b = 20;

const sum = (a, b) => {
    a = 15;
    return a + b;
}
console.log(a); // 10; cause 'a' changed to 15 in sum() scope that's why it is not changed in global variable;
const result1 = sum(a, b);
console.log(result1);


/**
 * In non-primitive type arguments = pass by reference
 */
const obj1 = {name: 'shihan', age: 30};
const obj2 = {name: 'moni', age: 25};

const func = (a, b) => {
    a.name = 'S';
    b.name = 'M';
    return {a, b};
}


console.log(obj1, obj2);
const result2 = func(obj1, obj2);
console.log(obj1, obj2); // {name: 'S', age: 30} {name: 'M', age: 25}

/**
 * Though we changed the value in func scope but when we pass object as arguemnt it passes object reference that's why 
 * it changed in both place.
 */


/**
 * Arguments
 */
function multiply(a, b) {

    console.log(arguments); //{ '0': 5, '1': 5, '2': 5 }
    return a * b;
}

const result3 = multiply(5, 5, 5); // it works fine output will be 25
console.log(result3);

/**
 * Cause in every function scope a keyword 'arguments' auto created which will give an array like object;
 * Where we can run for of loop but we can't use push(), map etc.
 */
