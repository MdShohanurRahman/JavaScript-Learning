let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = [...first, 'a', ...second, 'b']
console.log(combined) // [1,2,3,"a",4,5,6,"b"]

const copy = [...combined] // return full array
console.log(copy) // [1,2,3,"a",4,5,6,"b"]