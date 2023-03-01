/**
 * 37-6 (advanced) Closure, encapsulation, private variable
 * Closure: A closure is the combination of a function bundled together (enclosed) with references to its surrounding 
 * state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner
 * function. In JavaScript, closures are created every time a function is created, at function creation time.
 */

function func() {
    let count = 0;
    return function() {
        count = count + 1;
        return count;
    }
}

const x1 = func();
console.log(x1());
console.log(x1());

const x2 = func();
console.log(x2());
console.log(x2());
console.log(x2());
console.log(x2());
console.log(x2());

const x3 = func();
console.log(x3());
console.log(x3());
console.log(x3());

console.log(x2());
console.log(x3());
console.log(x1());