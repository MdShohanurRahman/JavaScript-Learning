const numbers = [3, 4];

//End
numbers.push(4, 5);
console.log(numbers); // [ 3, 4, 4, 5 ]

// Beginning
numbers.unshift(1, 2)
console.log(numbers); // [ 1, 2, 3, 4, 4, 5 ]

// Middle 
numbers.splice(2, 0, 'a', 'b');
console.log(numbers); // [ 1, 2, 'a', 'b', 3, 4, 4, 5 ]