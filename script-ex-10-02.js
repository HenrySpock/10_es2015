ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

const PI = 3.14;
Then Pi cannot be redeclared. 

// Quiz: 
// 1.  Var can be redeclared and reassigned, let cannot be redeclared. 
//     Var appears on the window object, let does not. Also applies to Const.
//     Var is function scoped, let is block scoped. Also applies to Const.
// 2.  Const cannot be redeclared or reassigned, though on data strctures like array and object, the insides 
// can be altered while the const declaration of the data structure remains the same.
// 3.  Const can be neither redeclared nor reassigned, let can be reassigned.
// 4.  To imagine hoisting, it understands the element in question as appearing at the top of the code such that
// anything below it can access it. Var is hoisted (though it will be hoisted undefined unless initialized), 
// let and const are not. Functions, on the other hand, are hoisted.