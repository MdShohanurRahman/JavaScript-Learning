# **Arrays**
# Table of Contents
1. [Adding Numbers ](#adding_numbers)
2. [Finding Element](#finding_element)
3. [Arrow Function](#arrow)
4. [Removing Element](#removingelement)
5. [Empty Array](#emptyarray)
6. [Combine](#combine)
7. [Spread Operator](#spread)
8. [Iterating Array](#iteratingarray)
9. [Joining Array](#joining)
10. [Sorting Array](#sorting)
11. [Testing](#testing)
12. [Map](#map)
13. [Reduce](#reduce)
14. [Eexercise](#exercise)

## Adding Numbers <a name='adding_numbers'></a>
```javascript
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
```

##Finding Element <a name='finding_element'></a>

```javascript
// primitive
const numbers = [1, 2, 3, 1, 4, 5];

/*
  0 -> means true
 -1 -> means false

*/
console.log(numbers.indexOf(1)); // 0
console.log(numbers.indexOf(1, 2)); // 3

console.log(numbers.lastIndexOf(1)); // 3
console.log(numbers.includes(1)); // true
```

```javascript
// reference
const courses = [
    {id: 1,name: 'a'},
    {id: 2,name: 'b'}
];

// using Arrow Function
const course = courses.find(course => course.name === 'a');

// predicate function
const course = courses.find(function (course) {
    return course.name === 'a'
})

// return index
const course = courses.findIndex(function (course) {
    return course.name === 'a'
})

console.log(course); // 0

```
## Arrow Function <a name='arrow'></a>

```javascript
// Regular function

let sum = function(a, b) {
  return a + b;
};

// Arrow function
let sum = (a, b) => a + b;

```

```javascript
// Regular function
let double = function(n) { return n * 2 }

// Arrow function
let double = n => n * 2;
```

```javascript
// No parameter arro function
let sayHi = () => console.log("Hello!");
sayHi() // Hello!

// Multiline Arrow function
/*if we use curly braces, then we need an explicit "return" */
let testSum = (a, b) => { 
    let result = a + b;
    return result; 
};

```

## Removing Element <a name='removingelement'></a>

```javascript
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
```

## Emptying Array <a name='emptyarray'></a>

```javascript
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
```

## Combining And Slicing <a name='combine'></a>

```javascript
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
```
## Spread Operator <a name='spread'></a>

```javascript
let first = [1, 2, 3];
let second = [4, 5, 6];

let combined = [...first, 'a', ...second, 'b']
console.log(combined) // [1,2,3,"a",4,5,6,"b"]

const copy = [...combined] // return full array
console.log(copy) // [1,2,3,"a",4,5,6,"b"]
```

## Iterating Array <a name='iteratingarray'></a>

```javascript
const numbers = [1, 2, 3];

for (const number of numbers) {
    console.log(number);

}

numbers.forEach((element, index) => {
    console.log(index, element)
});

```

## Joining Array <a name='joining'></a>

```javascript
// join
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

// split
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts)

const combined = parts.join('-');
console.log(combined)
```
## Sorting Array <a name='sorting'></a>

```javascript
let numbers = [1, 3, 2];

numbers.sort();
console.log(numbers)

const courses = [{
        id: 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'JavaScript'
    }

]

courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

})
console.log(courses)

```

## Testing Element <a name='testing'></a>

```javascript
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
```

## Filter Array <a name='filter'></a>

```javascript
const numbers = [1, -1, 2, -3];

/* 
const filtered = numbers.filter(function (value) {
    return value >= 0
})

*/

const filtered = numbers.filter(value => value > 0);
console.log(filtered);

```
## Map <a name='map'></a>

```javascript
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
```
```javascript
// map with object
const obj = filtered.map(n => {
    return {
        value: n
    };
}) 

// similar shorter code
const obj = filtered.map(n => ({value: n})); 

```
```javascript
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
```

## Reduce <a name='reduce'></a>


```javascript
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) {
    sum += n;
} 
console.log(sum);
```

```javascript
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

```
```javascript
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
```
## Exercise <a name='exercise'></a>

```javascript
// Array from range 
function arrayFromRange(min, max) {
    const myArray = [];
    for (let i = min; i <= max; i++) {
        myArray.push(i)
    }
    return myArray
};

const numbers = arrayFromRange(2, 5);

console.log(numbers);

// Includes
function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement)
            return true;
        else
            return false
    }
}

const numbers = [5, 2, 3, 4];
console.log(includes(numbers, 5))


// Except

const numbers = [1, 2, 3, 4, 1, 1]

const output = except(numbers, [1, 2]);
console.log(output); // [3,4]

function except(array, excluded) {
    const output = [];

    for (let element of array)
        if (!excluded.includes(element))
            output.push(element)
    return output
}

// Moving an Element

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);
console.log(output)

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length) {
        console.error('Invalid Offset');
        return
    } else {
        const output = [...array];
        const element = output.splice(index, 1)[0];
        output.splice(position, 0, element);
        return output;

    }

}


// Count Occurrence
const numbers = [1, 2, 3, 1, 1];
const s = coutnOfOccurrence(numbers, 1);

console.log(s);

function coutnOfOccurrence(array, searchElement) {
    // let count = 0;
    // for(let element of array)
    //   if (element === searchElement)
    //     count += 1;
    //   return count;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement)
        console.log(accumulator, current, searchElement)
        return accumulator + occurence
    });
}

```

```javascript
// Get max

const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max)

function getMax(array) {
    if (array.length === 0)
        return undefined;

/* 
    let max = array[0]

    for(let i=1; i<array.length; i++ )
      if ( max < array[i])
        max = array[i]

    return max; */

    /*   return array.reduce((a,b) =>{
        return (b>a) ? b: a;
      }); 
      
      */


    return array.reduce((a, b) => (b > a) ? b : a);
}

```

```javascript

// Movies Object
const movies = [{
        title: 'a',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'b',
        year: 2018,
        rating: 4.7
    },
    {
        title: 'c',
        year: 2018,
        rating: 3
    },
    {
        title: 'd',
        year: 2017,
        rating: 4.5
    },
]

// All the movies in 2018 with rating > 4 
// Sort them by their rating 
// Decending Order 
// Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)


console.log(titles);

```


