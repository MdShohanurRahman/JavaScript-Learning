/*
Map returns new Array
*/
const numbers = [1, -1, 2, 3]

//filter positive numbers
const filtered = numbers.filter(value => value > 0);

//map with <li> </li>
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);
/*
output: 
[
"<li>1</li>",
"<li>2</li>",
"<li>3</li>"
]
 */


const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

/* 
output:
<ul><li>1</li><li>2</li><li>3</li></ul>
*/

// map with object
/* const obj = filtered.map(n => {
    return {
        value: n
    };
}) */

/* const obj = filtered.map(n => ({value: n})); */


// chaining
const obj = numbers
    .filter(n => n > 0)
    .map(n => ({
        value: n
    }))
    .filter(ob => ob.value > 1)
    .map(ob => ob.value); // [ 2, 3 ]
console.log(obj)

/*
output:
[{
    value: 1
}, {
    value: 2
}, {
    value: 3
}]
*/