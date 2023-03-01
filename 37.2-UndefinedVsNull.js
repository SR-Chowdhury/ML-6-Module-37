/**
 * 37-2 Null Vs Undefined, different ways you will get undefined
 */

/** 8 ways to get undefind */

// Way 1: variable that is not initialized will give you 'undefined'
let a;
console.log(a);

// Way 2: function with no return will give you 'undefined'
const func = (a, b) => {
    const total = a + b;
}
console.log(func(10, 20));

// Way 3: if arguement not passed than it will give you 'undefined'
const func1 = (a, b) => {
    console.log(a , b); // 2 undefined
}

console.log(func1(2));

// Way 4: if return has nothing on the right side will return undefined
const func2 = (a, b) => {
    if (a<0 || b<0) {
        return;
    } else {
        return a+b;
    }
}
console.log(func2(2, -5)); //undefined

// Way 5: property that doesn't exist on an object will give undefined

const obj1 = {name: 'shihan'};
console.log(obj1.age); // undefined

// Way 6: accessing array elements outside of the index range will give you 'undefined'
const arr1 = [1, 3, 5];
console.log(arr1[5]); // undefined

// Way 7: if you delete an array element instead using of splice than it will give you 'undefined'
const arr2 = [2, 4, 6];
delete arr2[1];
console.log(arr2); // [2,  , 6] You should not delete by this way

// Way 8: Set a value directly to undefined; [you should use null]
const x = undefined;
console.log(x); // undefined

// You should use null