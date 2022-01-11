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

[1,2,3,4,5].forEach((n) =>{
    console.log(n *10);
});

[1,2,3,4,5].forEach(n =>{ //n has no parenthesis
    console.log(n *10);
});

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