# **Functions**
# Table of Contents
1. [Declaration](#declaration)
2. [Arguments](#arguments)
3. [Rest Operator](#rest_operator)
4. [Default Parameter](#default_paramete)
5. [Getter and Setter](#getter_setter)
6. [Try Catch](#try_catch)
7. [This keyword](#this_keyword)
8. [Exercise](#exercise)
 

## Declaration <a name='declaration'></a>

```javascript
walk(); // hoisting

// function declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function () {
    console.log('run');
};

run()
```
## Arguments <a name='arguments'></a>

```javascript
function sum() {
    total = 0;
    for (let value of arguments)
        total += value
    return total
}

console.log(sum(1, 2, 3, 4, 5, 10))
```
## Rest Operator <a name='rest_operator'></a>
> same as arguments but you can add extra parameter before the rest operator
> 
```javascript
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30))
```

## Default Parameter<a name='default_parameter'></a>

```javascript
// 2 default parameter
function interest(principal,rate = 3.5,year=5){
  return principal*rate / 100*year;
}

console.log(interest(10000)); 
```
<br>

```javascript
// 1 default 2 provide
function interest(principal, rate = 3.5, year) {
    return principal * rate / 100 * year;
}
console.log(interest(10000, undefined, 5));
```
## Getter & Setter<a name='getter_setter'></a>
>getters => access properties
setters => change (muted) them

```javascript
const person = {
    firsName: 'shohanur',
    lastName: 'rahman',
    get fullName() {
        return `${person.firsName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firsName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Shohanur Rahman';
console.log(person.fullName);


```

##Try Catch<a name='try_catch'></a>

```javascript
const person = {
    firsName: 'shohanur',
    lastName: 'rahman',
    get fullName() {
        return `${person.firsName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof (value) !== 'string')
            throw new Error('Value is not string');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter FirsName and LastName');
        this.firsName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'Shohanur';
    console.log(person.fullName);

} catch (e) {
    console.log(e.message);
    // alert(e)
}
```

##This Keyword<a name='this_keyword'></a>

> method -> obj
  function -> global(window,global)

```javascript
const video = {
    title: 'a',
    tags: ['x', 'y', 'z'],
    play() {
        console.log(this);
    },
    showTags() {
        // here callback function
        this.tags.forEach(tag => {
            console.log(this.title, tag)
        })
    }
};

video.play()

```
#### Output
> {
title:"a",
play:f play {...}
} 

```javascript
video.showTags()
```
#### Output
>a x
 a y
 a z 

 #### If we create another method property of the object

```javascript
video.stop = function () {
    console.log(this);
}
video.stop()
```
#### Output
>{
title:"a",
play:f play {...},
stop: {...}
}

#### Global Object
> when we create a regular function with the function  keyword then there this keyword will refer the    window object

```javascript
function playVideo() {
    console.log(this); // this refer global object
}

playVideo() // window object
```
#### this in constructor function

```javascript
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('myTitle'); // {}
// new reffer to the new empty object
```
#### Output
>Video {
title:"myTitle"
} 

## Changin this reference [global -> local] <a name='changin_this'></a>

```javascript
function playVideo() {
    console.log(this);
}

playVideo.call({
    name: 'shohan'
})
playVideo.apply({
    name: 'shohan'
})
playVideo.bind({
    name: 'shohan'
})();


playVideo() // window object


// changing this -> 3 approach
/* 
1. self = this
2. bind()
3. arrow function
*/
```
## Some Exercise <a name='exercise'> </a>

#### Sum of Arguments

```javascript
function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4))
```
 #### Area of circle
 ```javascript
const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area)
 ```

#### Error Handling
```javascript
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
} catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}
```
