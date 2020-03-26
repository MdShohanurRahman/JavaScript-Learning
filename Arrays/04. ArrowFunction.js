// arrow function automatically return
// no need to return statement

// if we use curly braces, then we need an explicit "return"


/* (param1, param2, …, paramN) => {
    statements
}
(param1, param2, …, paramN) => expression
    // equivalent to: => { return expression; }

    // Parentheses are optional when there's only one parameter name:
    (singleParam) => {
        statements
    }
singleParam => {
    statements
}

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => {
    statements
} */


let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log((sum(1, 2))); // 3



let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log(double(3)); // 6

let sayHi = () => console.log("Hello!"); // Hello! 

sayHi();


let age = 18;
let welcome = (age < 18) ?
    () => console.log('Hello') : () => console.log("Greetings!");

welcome();

// Multiline arrow functions
let testSum = (a, b) => { // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

console.log(testSum(1, 2)); // 3