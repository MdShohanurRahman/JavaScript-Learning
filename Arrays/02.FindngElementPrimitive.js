const numbers = [1, 2, 3, 1, 4, 5];

/*
 0 -> means true
 1 -> means false

*/
console.log(numbers.indexOf(1)); // 0
console.log(numbers.indexOf(1, 2)); // 3

console.log(numbers.lastIndexOf(1)); // 3
console.log(numbers.includes(1)); // true