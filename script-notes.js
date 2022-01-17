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





// Object property shorthand:
// function makePerson(first, last, age){
// return {
//     first: first,
//     last: last,
//     age: age,
//     isaAlive: true
//     };
// };

// New version:
function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isaAlive: true
        };
    };
    
    
    makePerson('jim', 'lennon', 29);
    
    // Shorthand Methods inside objects:
    
    // const mathStuff = {
    //     x: 200,
    //     add: function(a,b){
    //         return a+b;
    //     },
    //     square: function(a) {
    //         return a * a;
    //     }
    // };
    
    const mathStuff = {
        x: 200,
        add(a, b) {
            return a + b;
        },
        square(a) {
            return a * a;
        }
    };
    
    //Above cannot utilize arrow functions - because they would not be anonymous or they couldn't be decalred.
    
    // Computed Property Names: 
    // Allows us to create and object with a key that JavaScript can compute at definition. 
    
    // const color = {
    //     periwinkle: '9c88ff',
    //     '9c88ff': 'periwinkle'
    // };
    
    // function makeColor(name, hex){
    //     return{
    //         name: hex,
    //         hex: name,
    //     }
    // } //Does not give expected object if you want the reciprocal nature of the above const: it sets name = 9c88ff and hex = to periwinkle.
    
    // Previously we had to do this:
    
    // function makeColor(name, hex) {
    //     const color = {};
    //     color[name] = hex;
    //     color[hex] = name;
    //     return color;
    // }
    
    // But the shorthand now allows for this:
    function makeColor(name, hex) {
        return {
            [name] : hex,
            [hex] : name
        }
    }
    
    // This also evaluates code:
    const mystery = {
        [6 + 7]: 'thirteen'
    };
    
    //13: "thirteen"
    
// Destructuring

// When you have a data structure (whether array or object) we can "destructure" or extract the values into new variables.

const teaOrder = {
    variety :'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true, 
    quantity : 3
};

// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;

// const {price, quantity, teaName} = teaOrder; // is the same as the previous three lines.
const { origin } = teaOrder;
// If you try setting something in the brackets that doesn't exist, it's set as undefined.
//It does not update the object.
const { country } = teaOrder;

function hi(...nums){

} //will collect all arguments into a nums array

//Using rest operator in destructing variable gathers unspecified values togehter in a variable
// const {price, quantity, teaName, ...others} = teaOrder;
// others // {variety: 'oolong', origin: 'taiwan', hasCaffeine: true}

// Setting a default value with destructuring: 

const options = {
    refreshTime: 200
}

const { refreshTime = 750, waitTime = 1000 } = options;
console.log(refreshTime); // 200 - initialized in options
console.log(waitTime); // 1000 - fallback to default

const { brewTemp = 175 } = teaOrder;
// This sets a default for brewTemp, but if brewTemp is then initialized in teaOrder that takes precedence.
// Basically, when brewTemp is undefined, this sets it to 175.

// Renaming with destructuring:
const instructorData = {
    name: "Colt",
    job: "Instructor"
}

const { name: instructorName, job: occupation } = instructorData;

const { teaName : tea } = teaOrder;

const { brewTemp: temp = 175 } = teaOrder;

// function checkout(tea){
//     const {quantity, price} = tea;
//     return quantity * price;
// }


// checkout(teaOrder);

function checkout(tea){
        const {quantity = 1, price} = tea; //here we are setting a default in the function call
        return quantity * price;
    }

const order1 = {
    variety :'white',
    teaName : 'silver needle',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true, 
};

// Destructuring Arrays: 
const myFavoriteThings = ['teaching', 'music', 'hiking', 'dank memes'];

const [first, second, ...others] = myFavoriteThings;

console.log(first); //teaching
console.log(second); //music
console.log(others); //['hiking', 'dank memes']

const students = [
    { name: 'Drake', gpa: 4.6 },
    { name: 'Henrietta', gpa: 4.4 },
    { name: 'Tung', gpa: 4.0 },
    { name: 'Harry', gpa: 3.8 },
    { name: 'An', gpa: 3.2 },
]

// const [ topStudent ] = students; //This is acting on index[0] automatically.
// const [ topStudent, secondBest ] = students; //This is acting on index[0] and [1] automatically.
// const [topStudent,,,fourthPlace] = students; //the additional commas skip those indices.
// const [ topStudent, ...losers ]  = students;
// To avoid commas, you can use: 
// const fifth = students[4]

// Function destructuring: 
// function makeInstructor(settings) {
//     let name = settings.name;
//     let age = settings.age;
// }

// function myFunc({name, age}) {
//     let name = name;
//     let age = age;
// }

function getTotal(tea) {
    const {quantity, price} = tea;
    return quantity * price;
}

const order2 = {
    variety :'white',
    teaName : 'silver needle',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true, 
    // quantity : 4
};

// function getTotal({quantity, price}) { //This mean it takes quantiy and price keys from any object passed in.
//     return quantity * price;
// }

function getTotal({quantity: qty = 1, price}) { 
    return qty * price;
}

const longJumpResults = [ 'Tammy', 'Jessica', 'Violet' ];
const swimMeetResults = [ 'Japan', 'France', 'Chile' ];

function awardMedals([gold, silver, bronze]){
    return {
        gold, silver, bronze
    }
}

// Nested Destructuring:
const instructor = {
    id: 44,
    name: 'Colt',
    isHilarious: true,
    funFacts: {
        favoriteFood: 'Burrito',
        favoriteDrink: 'Old Fashioned'
    }
};

const {funFacts: {favoriteFood, favoriteDrink}} = instructor;
console.log(favoriteFood);

const movie = {
    Rated : {
        rating : 'R',
        advisory : 'Rated R for brief nudity'
    },
    Ratings : [
        { Source: 'Internet Movie Database', Value: '8.3/10' },
        { Source: 'Rotten Tomatoes', Value: '93%' },
        { Source: 'Metacritic', Value: '88/100' }
    ],
    Versions : [
    { version: 'Original Release', runtime: 161 },
    { version: "Director's Cut", runtime: 180 }
    ]
}
// const {Rated} = movie;
// const {rating, advisory}=Rated;
// or 
const {Rated: {rating, advisory}} = movie;

const { Ratings : [ 
    { Value : imdbRating }, 
    { Value : rtRating}, 
    { Value : metaRating } 
] , 
Versions: [ 
    { runtime: originalRunTime }, { runtime: directorsCutRunTime}
]
} = movie;

// Destructuring Swap: 
// Swapping values betweenv variables.

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let temp = delicious;
// delicious = disgusting; 
// disgusting = temp; //Without destructring you need a third variable as a placeholder.

// let both = [delicious, disgusting ];
// [ disgusting, delicious ] = both;
[disgusting, delicious] = [delicious, disgusting]
delicious // Whipped Cream 
disgusting // Mayonnaise

// Maps and Sets 
// Data Structures: Arrays, Objects, Maps, Sets 
// Maps - also called hash maps in other languages; objects were a replacement for maps 
// Object keys can only be strings, whereas Map keys can be any data type at all. In an 
// object, all keys are turned into strings, whereas in a map all key data types are respected. 

// There is no "map literal", there is a constructor function:
const myMap = new Map();

// add key value pair: 
myMap.set(7, 'seven') // {'7 => 'seven'}
myMap.set('7', 'seven string');

// retrieve:
myMap.get(7);

// If you want to store an array, object or function as a key in map, you have to 
// store a reference to it: 

// const empty = [];
// myMap.set(empty, ['empty array!']);

// myMap.set(true, 'TRUEEEE!');
// myMap.get(true); // 'TRUEEEE!'
// myMap.get('true'); //undefined

// const add = (x,y) => x+y;
// const mult = (x,y) => x*y;

// const funcCalls = new Map();
// funcCalls.set(add, 0);
// funcCalls.set(mult, 0);

// funcCalls.set(add, 1);
// funcCalls.set(mult, 9);

// funcCalls.get(add) //1 ; notice the argument is the name of the function 
// funcCalls.get(mult) //9

// Map Methods: 
// Create a new non-empty map with an array passed in:
// [[k,v],[k,v],[k,v]]

const bandData = [[3, '3 Doors Down'],
['three', 'Three Dog Night'],
['nine', 'Nine Inch Nails'],
['four', 'The Four Seasons'],
[41, 'Sum 41']]

const bandMap = new Map(bandData);

// Can take any map and turn it back into an array with spread operator: 

let bandArray = [...bandMap];

// .set returns the entire map, so we can chain set calls:
bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');

// Check contents:

bandMap.has(41) //true ; etc
// bandMap.delete('twenty') // deletes Matchbox Twenty - can only use on key, not value
// bandMap.clear() // empties entire map

bandMap.keys() // MapIterator {3, 'three', 'nine', 'four', 41, 182, 'twenty'} 

let bandNum = [...bandMap.keys()] // [3, 'three', 'nine', 'four', 41, 182, 'twenty']

bandMap.values(); //MapIterator {'3 Doors Down', 'Three Dog Night', 'Nine Inch Nails', 'The Four Seasons', 'Sum 41', 'Blink-182', 'Matchbox Twenty'};

let bandArr = [...bandMap.values()] // ['3 Doors Down', 'Three Dog Night', 'Nine Inch Nails', 'The Four Seasons', 'Sum 41', 'Blink-182', 'Matchbox Twenty']

// Iterating Maps 
// For of 
// forEach
// Maps are ordered, unlike objects. 
// Maps also have a size:
// bandMap.size

// When iterating on Map with forEach:
// *First* parameter is value, *second* is key, reversed from the idea of key/value pair:
bandMap.forEach((val, key) => {
console.log(key + ' => ' + val);
});

for (let x of bandMap){
    console.log(x);
};

for (let [key, value] of bandMap){
    console.log(key, '=', value);
}

// You can clear a map: 
// map.clear();

// Set basics 
// Sets only store unique values (whereas arrays could store repeated values)
// There is no literal, they are created witht he new keyword

// const bannedHashTags = new Set();
// can pass in an array:
// let banned = ['nofilter', 'justsaying', 'winning', 'yolo']
// const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
// Or array as variable:
// const bannedHashTags = new Set(banned);

// const letters = new Set('hello', 'goodbye');
//{'h', 'e', 'l', 'o'} : it won't give an error for multiple args but only takes one, and only takes unique instances, so here there's only one 'l'

const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
// Add to set with add(), and you can chain adds: 
bannedHashTags.add('bestLife').add('selfie');
// checking for a value: 
// has() (cannot chain has)
bannedHashTags.has('yolo');
// remove value:
bannedHashTags.delete();

function filterHashTags(tags){
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
    return tags.filter((tag) => !bannedHashTags.has(tag))
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset']

const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
// If you want to turn a set into an array to be able to work with it the same way:
// new Set(ages); simply makes a set out of ages 
// let ageRed = new Set(ages); stores the set from the array to a variable
// but:
[...new Set(ages)] //Actually spreads the set of 'ages' into an array
let ageRed = [...new Set(ages)] // Which could be set to a variable 
// You can also clear, like with maps: 
// set.clear();

// Where do you use sets: 
// Am I removing duplicate values?
// Do I need unique values?
// Much more efficient to search through collection than an array

// NaN is never equal to itself 

// Maps: 
// Keys can be anything we want 
// can use forEach and for... of
// Finding size is way easier 