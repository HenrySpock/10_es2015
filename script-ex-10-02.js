let numbers = [1, 2, 3, 4.5, 6000, -23]
// 1. ES5 Map Callback:
// Original:
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

function double(arr) {return arr.map(val => val * 2)};

// 2. Refactor the following function to use arrow functions:
// Original:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

// function squareAndFindEvens(numbers){
//     var squares = numbers.map((num) => num ** 2);
//     var evens = squares.filter((square) => square % 2 === 0);
//     return evens;
//   }

// function squareAndFindEvens(numbers){
//     var squares = numbers.map(num => num ** 2);
//     var evens = squares.filter(square => square % 2 === 0);
//     return evens;
//   }

// function squareAndFindEvens(numbers){
//     var evenSquares = numbers.map(num => num ** 2).filter(square => square % 2 === 0);
//     return evenSquares;
//   }

 const squareAndEven = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

 //Remember, even if you declare a function as a variable you can still execute the function() normally.

 
 
  