let first = [1, 2, 3];
// let first = [{id:1}];    
let second = [4, 5, 6];

let combined = first.concat(second)
console.log(combined) // [1,2,3,4,5,6]

let slice = combined.slice(2, 4)
console.log(slice) // [3,4]

let slic = combined.slice(2)
console.log(slic) // [3,4,5,6]

let sliceFull = combined.slice(2)
console.log(sliceFull) // [3,4,5,6]