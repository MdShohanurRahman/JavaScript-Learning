let numbers = [1, 2, 3, 4]

// solution 1 
/*
 not effective when multiple reference
 are there.
 Example:let another = numbers
*/
numbers = []

// solution 2
numbers.length = 0

// solution 3
numbers.splice(0, numbers.length)