// 1. Given this function:

// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// Refactor it to use the rest operator & an arrow function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// Arrow can only be anonymous, so set function to variable:

// const filsterOurOdds = () => {}

// add rest operator ...nums, 
// var nums = Array.prototype.slice.call(arguments); is replaced by ...nums as argument 
// const filsterOurOdds = (...nums) => {}

// write filter expression:
// const filsterOurOdds = (...nums) => {nums.filter(i => i %2 === 0)}

// remove brackets because single expression:
const filterOutOdds = (...nums) => nums.filter(i => i % 2 === 0); 

let nums = [1,2,3,4,5,6,7];

// 2. Write a function called findMin that accepts a variable number of arguments and 
// returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...number) => Math.min(...number);

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// 3. mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// must be anonymous: 
// const mergeObjects =
// accepts two objects: 
// (object1, object2) 
// returns new object with all keys/values: 
//  => {...object1, ...object2}
// Object needs parenthesis for it to be recognized as object and not function block:
//  => ({...object1, ...object2})

const mergeObjects = (object1, object2) => ({...object1, ...object2});

// 4. doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable 
// number of arguments. The function should return a new array with the original array 
// values and all of additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// must be anonymous: 
// const doubleAndReturnArgs =
// accepts two objects: 
// (arr, ...args) 
// returns new array with original array (requiring spread operator):
//  => [...arr, 
// and all additional values doubled (again requiring spraed operator):
// ...args.map(i => i * 2)]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(i => i * 2)]

// 5. Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these 
// functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the 
// existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

// must be anonymous: 
// const removeRandom =
// accepts array: 
// items
// remove a random element in the items array:
//  => { let index = Math.floor(Math.random() * items.length);
//  and return a new array without that item.
//  return [...items.slice(0, index), ...items.slice(index + 1)]; //concats the array before and after the chosen index
let items = [1,2,3,4,5,6,7,8,9,0];
const removeRandom = (...items) => { 
    let index = Math.floor(Math.random() * items.length); 
    return [...items.slice(0, index), ...items.slice(index + 1)]; 
};  

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

array1 = [1,2,3] 
array2 = [4,5,6]
// must be anonymous: 
// const extend 
// accepts two arrays: 
// = (array1, array2) => [...array1, ...array2];
// returns new array of input arrays concatenated:
//  => [...array1, ...array2];

const extend = (array1, array2) => [...array1, ...array2];



/** Return a new object with all the keys and values
from obj and a new key/value pair */

let obj = { pet: "cat",
            name: "sadie"
         };

// must be anonymous: 
// const addKeyValue 
// accepts object, key and value
// = (...obj, key value) 
// returns new object with keys and values of obj + addition key value args:
//  => ({...obj, key: value});

const addKeyValue = (object, key, value) => ({...object, [key] : value});

 

/** Return a new object with a key removed. */

// must be anonymous: 
// const deleteKey 
// accepts object and key to be removed
// = (object, key) 
// declare scoped object from spread obj:
// => { let newObject = { ...object} 
// delete key arg from scoped object:
// delete newObject[key]
// return the new object:
// return newObject;

const deleteKey = (object, key) => { 
    let newObject = { ...object } 
    delete newObject[key] 
    return newObject;
};
 

/** Combine two objects and return a new object. */

let petObj1 = { pet: "cat",
name: "Ella"
};

let petObj2 = { pet: "dog",
name: "Patience"
};

let petObj3 = { whydoes: "dog",
thiswork: "Patience"
};

const objComb = (obj1, obj2) => {
    return {...obj1, ...obj2}
};

// objComb(petObj1, petObj2);

/** Return a new object with a modified key and value. */

// must be anonymous: 
// const modifyKeyValue 
// accepts object and key to be removed
// = (object, key, value) 
//declare scoped key:
// => {} let newObject = {...obj}
//update value in new object:
// newObject[key] = value
// return new object:
// return newObject;

const modifyKeyValue = (object, key, value) => {
    let newObject = {...object} 
    newObject[key] = value;
    return newObject;
}

modifyKeyValue(petObj1, "name", "precious");