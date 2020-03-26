let numbers = [1, 2, 3, 4]

// End 
const last = numbers.pop()
console.log(last) // 4

// Beginning
const first = numbers.shift()
console.log(first) // 1 

// Middle
numbers = [1, 2, 3, 4]
const middle = numbers.splice(2, 1)
console.log(middle) // [3]
console.log(numbers) // [1,2,4]