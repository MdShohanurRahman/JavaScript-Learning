const numbers = [1, -1, 2, -3];

/* 
const filtered = numbers.filter(function (value) {
    return value >= 0
})

*/

const filtered = numbers.filter(value => value > 0);
console.log(filtered);