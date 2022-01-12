// let and const - both new in es2015, so, happened before I started learning. 
// If var is globally scoped, it actually becaomes a property on the window object, let and const do not. 
// Also, var varbiables in a function are scoped to the entire function, regardless of code blocks. ALso not true 
// for let and const.
// Let can be reassigned but not redeclared. Const can be neither reassigned nor redeclared. 
// Let and Const are block-scoped. Note: Curly braces on an object literal are not a code block.
// Const can be "mutated" in the case of an array and an object because of how the memeory pointer works. 
//The array or object still can't be redeclared, but the insides can evolve.
// Var declarations are hoisted, but assignments are not. To understand hoisting, just think 
// of it as that particular item appears at the top of the page so that anything underneath it 
// can reference it. Let and Const are not hoisted. They have to be initialized to be accessed.
//Also, Let can be declared without initialization, but const must be initialized or it throws an error.
// Rule of thumb: always use const until you know you need to change the variable. 

// Arrow Functions 
// Great replacement for callbacks, only work as function expressions, replacing the anonymous function

// Function declaration vs. function expression:

// declaration:
// function greet(){

// }

// expression:
// const add = function(x,y){
//     return x+y;
// }

// Above, written as arrow function:

// const add = (x, y) => {
//     return x+y;
// }

// Below shows the refactoring of a callback:

// [1,2,3].forEach(function(n, idx){
//     console.log(n, idx);
// });

// [1,2,3].forEach((n, idx) => {
//     console.log(n, idx);
// });

[2, 3, 6, 78, 99, 104, 23].reduce(function(max, currNum){
    return Math.max(max, currNum);
});

[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
    return Math.max(max, currNum);
});

[2, 3, 6, 78, 99, 104, 23].reduce((min, currNum) => {
    return Math.min(min, currNum);
}); //Also works. 

// Arrow functions do not have a name - they can be saved to a variable, but are not named functions.

// Arrow function shortcuts:
// If an arrow function has 1 parameter, that parameter does not need parenthesis:

// [1,2,3,4,5].forEach((n) =>{
//     console.log(n *10);
// });

// [1,2,3,4,5].forEach(n =>{ //n has no parenthesis
//     console.log(n *10);
// });

// Arrow funciton with no parameters:

const greet = () => {
    console.log('Hello!!!');
};

// Some arrow functions allow for an implicit return:

[1,2,3,4,5,6].filter(function(num) {
    return num % 2 === 0;
});

// Above as arrow function with implicit return:
[1,2,3,4,5,6].filter((num) => num % 2 === 0);


// const double = (n) => {
//     n * 2;
// }

// Above as arrow function with implicit return:
// const double = ((n) => n * 2);

// [1,5,7,9,10,12,13,15].map((n) => {
//     if (n % 2 === 0){
//         return 'even';
//     }
//     return 'odd'
// });

// Above could not have implicit return / no curly braces because the block statement would 
// make no sense to JavaScript, because or removing return from two expressions. To accomplish this, we 
// could use a ternary operator:

[1,5,7,9,10,12,13,15].map((n) => ( n % 2 === 0 ? 'even' : 'odd')); 

const dailyRainTotals = [ [1.2, 0.35, 2.2],[1.7, 0.6, 0.1],[2.5, 0.9, 1.5] ];

dailyRainTotals.map((hourlyRainTotals) => {
return hourlyRainTotals.reduce((sum, inchesOfRain) => {
    return sum + inchesOfRain;
});
});

dailyRainTotals.map((hourlyRainTotals) => 
 hourlyRainTotals.reduce((sum, inchesOfRain) => 
    sum + inchesOfRain)
); //notice this arrow function is on multiple lines, but the point is it only has one expression.

// Sometimes with multiple lines, especially in react, you will use parenthesis - the below works exactly the same as the above:
dailyRainTotals.map((hourlyRainTotals) => (
 hourlyRainTotals.reduce((sum, inchesOfRain) => 
    sum + inchesOfRain)
));

// Two things to watch out for: 
// 1. implicitly returning an object:

// This works fine:
// const makeMath = (num) => {
//     return {
//         square : num * num,
//         double : num * 2
//     };
// };

// This does not:
// const makeMath = (num) => 
//     {
//         square : num * num,
//         double : num * 2
//     };
// Because JavaScript thinks the curly brace is a function expression, not an object literal. To make this work,
// wrap the object in parenthesis:
const makeMath = (num) => 
    ({
        square : num * num,
        double : num * 2
    });
 
// 2. Arrow functions do not have their own "this":
// const cat = {
//     name: 'Bubs',
//     meow: function() {
//         return `${this.name} says MEOW!!`;
//     }
// };

// The above with arrow:
const cat = {
    name: 'Bubs',
    meow: () => {
        return `${this.name} says MEOW!!`;
    }
};
// Returns: ' says MEOW!!'
// this.name evaluated to undefined, because "this" inside an arrow function refers to the global window "this."

// RECAP:
// 1. Can only be used as shorthand for anonymous function expressions.
// 2. Must put parentheses around parameters if there are 0 or 2+ parameters. 
// 3. Return statement is implied if you leave out curly braces (must be 1 expression).
// 4. They do not make there own this.

// REST AND SPREAD: ...
// Use spread to copy arrays and objects
// Use rest to gather remaining arguments in an array

// The Argument Object:
// function max() {
//     console.log(arguments);
// };

// function sum(){
//     arguments.reduce((sum, val) =>{
//         return sum+val;
//     })
// } //error - arguments.reduce is not a function

function sum(){
    const args = Array.from(arguments);
    return args.reduce((sum, val) =>{
        return sum+val;
    });
}

// arguments object does not work in arrow functions either

const max = function(){
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => {
        return currVal > max ? currVal : max;
});
};

// Rest and Spread: They are *not* an ellipsis
// function sum(...nums){
//     console.log(nums);
// } //creates an array of the arguments and logs it

function sum(...nums){
    return nums.reduce((sum, n) => sum + n);
} //returns the sum of all arguments

const sumAll = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
};

//The rest operator is the last parameter defined in a function and will
// evaluate to an array of all additional arguments passed in. 

// function makeFamily(parent1, parent2, ...kids){
//     console.log(parent1, parent2);
//     console.log(kids);
// }

//Michael Stephanie
//['Sebastien']

function makeFamily(parent1, parent2, ...kids){
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    };
}

const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof v === type);
};

// Gotcha: Rest *must* be the last parameter in the function.

// Spread:
// max(...something) 
// [...something]
// {...something}

// Executing a function and using spread to spread an iterable into individual arguments: 

function takesFour(one, two, three, four) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
}

const names = ['Mary', 'Colt', 'Angela', 'Abe']

takesFour(...names);
// Mary
// Colt
// Angela
// Abe

// const nums = [4, 5, 88, 123, .92, 34]
// Math.max(nums)
//NaN, because it's checking the entire array as an entity but there's no other parameter
// const nums = [4, 5, 88, 123, .92, 34]
// Math.max(...nums)
//123. because now it's checking each number inside the array

// const filterByType = (type, ...vals) => {
//     return vals.filter((v) => typeof v === type);
// };

const things = [ 23, 45, true, false, 0, 'hello', 'goodbye', undefined];

filterByType('number', things); // []
filterByType('number', ...things); //23, 45, 0
filterByType('strings', ...things); //'hello', 'goodbye' 

console.log(things); // [ 23, 45, true, false, 0, 'hello', 'goodbye', undefined] ie, the array
console.log(...things); // 23 45 true false 0 'hello' 'goodbye' undefined - ie, each index of the array 
console.log("hello"); // h e l l o - separated by spaces

// You can spread iterables into an array literal. 

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette; //This is NOT a copy, both names are pointing to the same place.

// const paletteCopy = palette.slice(); //This is a copy.
// const paletteCopy = [...palette]; //This is also a copy.
const paletteCopy = ['sky blue', ...palette, 'grass green']; //this is a copy plus two colors

let palette2 = palette.concat('deep purple'); // copy plus deep purple

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['guatemala red cat', 'snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];

// ['snow jasmine', 'fragrant leaf', 'honey orchid', 'winter sprout', 'african solstice', 'marshmallowroot']

const caffeinated = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey'];

const vowels = 'aeiou';
const vowelArr = [...vowels];

// Spread and Deep Copies
const shoppingCart = [
    {
        name: 'honey orchid',
        quantity: 2,
        price: 13.5
    },
    {
        name: 'african solstice',
        quantity: 4,
        price: 25.99
    },
]

const cartCopy = [...shoppingCart]
//shoppingCart and cartCopy *are not the same*, but the seemingly copied objects within them *are.*
//Spread keeps the same references for nested elements. Creating "deep clones" is a longer conversation for later.
