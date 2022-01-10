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