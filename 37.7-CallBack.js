/**
 * Call Back function:
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 */

function parentFunc(func, name) {
    func(name);
}

function sonFunc(name) {
    console.log(name + ' is a son of Parent');
}

function daughterFunc(name) {
    console.log(name + ' is a daughter of Parent');
}

parentFunc(sonFunc, 'X');
parentFunc(daughterFunc, 'Y');

// This is call back function