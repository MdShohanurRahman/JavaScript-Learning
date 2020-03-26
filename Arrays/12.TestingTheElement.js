const numbers = [1, -1, 2, 3]

// every
const allPositive = numbers.every(function (value) {
    return value >= 0;
})

console.log(allPositive) // false

// some
const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
})

console.log(atLeastOnePositive) // true

/*
These are new Method in javascript.Not supported in older browser. 
*/