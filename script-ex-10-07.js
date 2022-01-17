// Maps and Sets: 

// 1. 
// What does the following code return?

// new Set([1,1,2,2,3,4])
//Returns a set of only unique value instances:
// {1, 2, 3, 4}

// 2.  
// What does the following code return?

[...new Set("referee")].join("")
//Spread operator makes a set of the *unique* letters of referee into an array - ref,
//while .join brings them back together into a new string:
// 'ref'

// 3. Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {[1,2,3] => true, [1,2,3] => false}

// 4.
// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// Must be anonymous for arrow function:
// const hasDuplicate =
// 1 arg so no parenth:
// arr => 
// making a set of the array and checking it's size against the length of the array: 
// same length, false, different lenght, true:
// new Set(arr).size !== arr.length

const hasDuplicate = arr => new Set(arr).size !== arr.length

// 5. vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the 
// values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
 
function vowelCount(str) {
    let strSplitter = str.split("");
    const vowelMap = new Map();
    const vTest = "aeiou";
  
    strSplitter.forEach(function(letter) {
      let lcLetter = letter.toLowerCase()
      if (vTest.indexOf(lcLetter) !== -1) {
        if (vowelMap.has(lcLetter)) {
          vowelMap.get(lcLetter).val++;
        } else {
          vowelMap.set(lcLetter, 1);
        }
      }
    });
    return vowelMap;
  }