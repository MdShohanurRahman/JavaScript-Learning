#                              **Objects**

# Table of contents <a name="TOC"></a>
1. [Basic Object Syntex](#Basic_Object_Syntex)
2. [Factory Function](#factory_function)
3. [Constructor Function](#constructor_function)
4. [Dynamic Nature Of Object](#dynamic_nature_of_object)
5. [Object Property Types](#Object_Property_types)
6. [Constructor Property](#constructor_property)
7. [Functions Are Object](#constructor_property)
8. [call() , apply() and bind()](#call_apply_bind)
9. [Vakues Vs Reference](#value_vs_ref)
10. [Enumerating Properties](#enumerating_properties)
11. [Object Cloning](#object_cloning)
12. [Template Literal](#template_literal)



## Basic Object Syntex <a name="Basic_Object_Syntex"></a>
```javascript
let radius = 1;
let x = 1;
let y = 1;

// Object-Oriented Programming (OOP)
// Object Literal Syntax
const circle = {

    radius: 1, // property
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw circle');
    }
};

console.log(circle.draw()); // Method 
```

## Factory Function <a name= 'factory_function'> </a>

```javascript
/*

If we use object literal syntax can use for one implementation. 
But when we have 2 object with same property then we have to 
do duplicate implementations.So we can use factory function.
(We can also use constructor function) 

*/

// factory function

function createCircle() {

    const circle = {
        radius: 1,
        draw: function () {
            console.log('draw circle');
        }
    };

    return circle;
}

const circle1 = createCircle(1);
console.log(circle1);

```
###### Output
``` javascript
{
radius:1,
draw:f draw {
}
}
```

### shorter factory-function code

```javascript

function createCircle(radius) {

    return {
        radius,
        draw() {
            console.log('draw circle');
        }
    };
}
const circle2 = createCircle(2);
console.log(circle2);
```

## Constructor Function <a name='constructor_function'></a>

``` Naming Convention: PascalNotation -> OneTwoThree ```

```javascript
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');

    }
}


// initialize object

const circle = new Circle(1);
```


when we use new operator 3 things happened :

  1. create an empty object {} 
  2. set this to point to empty object 
  3. finally it will return that object from this function




## Dynamic Nature of Object <a name='dynamic_nature_of_object'></a>

```javascript
const circle = {
    radius: 1
};

// cannot re assign circle object cause it is const
// but u can add new property of that object

circle.color = 'yellow';
circle.draw = function () {}

console.log(circle);

```
##### Output
```
{
radius:1,
color:"yellow",
draw: {
}
}
```

#### Delete Object property

``` javascript
delete circle.color; 
delete circle.draw 
```
##### Output
```
{
radius:1,
}
```
## Object Property Types <a name='Object_Property_types'></a>
There are two types of object properties: data properties and accessor properties.

A data property contains a single location for a data value. A data property has four attributes

    1.[[Configurarable]] – determines whether a property can be redefined or removed via delete operator.

    2.[[Enumerable]] – indicates that if a property will be returned in the for...in loop.

    3.[[Writable]] – specifies that the value of a property can be changed.

    4.[[Value]] – contains the actual value of a property.

By default, the [[Configurable]] , [[Enumerable]], and [[Writable]] attributes set to true for all properties defined directly on an object. The default value of the [[Value]] attribute is undefined.

To change any attribute of a property, you use the Object.defineProperty() method.

```The Object.defineProperty() method accepts three arguments:```

    An object.
    A property name of the object.
    A property descriptor object that has four properties: configurable, enumerable, writable, and value.

The following example creates a person object and adds the ssn property to it using the Object.defineProperty() method:

```javascript
let person = {};
Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});
console.log(person.ssn) // 012-38-9119
```
###### Note: you can't delete this ssn property with ``` delete person.ssn```

The following snippet makes the ssn property non-enumerable by setting the enumerable attribute to false.

```javascript
let person = {};
person.age = 25;
person.ssn = '012-38-9119';

Object.defineProperty(person, 'ssn', {
    enumerable: false
});


for (let prop in person) {
    console.log(person[prop]);
}
```
##### Output
```
25
```

## Accessor properties

Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes. But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].


When you read data from an accessor property, the [[Get]] function is called to return a value. The default return value of the [[Get]] function is undefined.


If you assign a value to an accessor property, the [[Set]] function is called. To define an accessor property, you must use the Object.defineProperty() method. For example:

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log(person.fullName);
```

##### Output
```
John Doe
```
#### JavaScript object property descriptor

``` javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor);
```
##### Output

```

{
value:"John",
writable:true,
enumerable:true,
configurable:true
}

```

## Constructor Property <a name =constructor_property></a>
 
javaScript has a property called constructor. Every Object of a javascript has a constructor property, and that references the function that was use to create that object 

``` javascript

// factory function

function createCircle(redius) {
    return {
        redius,
        draw: function () {
            console.log('draw');

        }
    };
}

const circle = createCircle(1) 
console.log(circle.constructor )
```
##### Output

```
function Object() { [native code] }
```

```javascript
// constructor Function
function Circle(redius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');

    }
}

const another = new Circle(2);
```

##### Output

```
function Circle(radius){this.radius=radius;this.draw=function(){console.log('draw');};
```

```let x = {}``` is same as ```let x = new Object()```



**Note: when we create object literal syntax then Object is a built in constructor**


```javascript
// built in constructor

new String(); // '' , " ", ``
new Boolean(); // true, false 
new Number(); // 1, 2, 3
```


## Functions Are Object <a name='function_are_object'></a>

```javascript
function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            Console.log('draw');
        }
}


// same as -> const another = new Circle(1)
// this will reference {} (empty object)
Circle.call({}, 1);

// same as call but passing arg in the array
Circle.apply({}, [1])

```

## call() , apply() and bind() <a name= 'call_apply_bind'> </a>

As functions are also Objects in JavaScript, these 3 methods are used to control the invocation of the function.

You can use ```call()```/```apply()``` to invoke the function immediately. ```bind()``` returns a bound function that, when executed later, will have the correct context ```("this")``` for calling the original function. So ```bind()``` can be used when the function needs to be called later in certain events when it's useful


### ```call()``` or ```Function.prototype.call()```

```javascript

var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// returns output as welcome Niladri to Newtown KOLKATA in WB
```

The first parameter in ```call()``` method sets the "this" value, which is the object, on which the function is invoked upon. In this case, it's the "obj" object above

### ```apply()``` or ```Function.prototype.apply()```

```javascript
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

// array of arguments to the actual function
var args = ["Newtown","KOLKATA","WB"];  

console.log(greeting.apply(obj,args));

/* 
The output will be 
 welcome Niladri to Newtown KOLKATA in WB
*/
```
### ```bind()``` or ```Function.prototype.bind()```

```javascript
var obj = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(obj); 

/*
dir() is the way to see all the properties 
of a specified JavaScript object  
*/
console.log(console.dir(bound)); ///returns a function


console.log(bound("Newtown","KOLKATA","WB")); //call the bound function

/* the output will be 
welcome Niladri to Newtown KOLKATA in WB */

```

## Value Vs Reference <a name= value_vs_ref> </a>

#### value types
    Number
    String
    Boolean
    Symbol
    undefined
    null

#### Reference types
    Object
    Function
    Array 

    **Primitives are copied by their value**
    **Objects are copied by their reference**


```javascript

// primitive type example
let number = 10

function increase(number) {
    
    number++
}

increase(number);
console.log(number); // 10


// reference type example
let obj = {
    value: 10
};

function increase(number) {
    obj.value++;
}

increase(obj);
console.log(obj); // 11
```


## Enumerating Properties Of an Object <a name= 'enumerating_properties'> </a>

```javascript
// for-in
const circle = {
    radius: 1,
    draw() {
        console.log('draw');

    }
};

for (let key in circle)
    console.log(key, circle[key]);

```

##### Output
```
radius 1
draw draw(){console.log('draw');}
```

```javascript
// for-of
for (let key of Object.keys(circle)) {
    // Object.keys(circle) returns an array
    // Object is built in constructor function
    console.log(key, circle[key]);
}

```
##### Output
```
radius 1
draw draw(){console.log('draw');}
```

```javascript
// check key exits in object
if ('radius' in circle) 
  console.log('yes');
```  


## All Loops Example

```javascript

// for-loops
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}

// while-loops
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

// infinite while-loops
while (true) {
  console.log('Hello, world!');
}

// infinite for-loops
for (;;) {}

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

// for-each
// best uses for list
let myArray = [1,2,'Shohan','shomik']; 

myArray.forEach(element => {
    console.log(element);
    
});
```

## Object Cloning <a name='object_cloning'> </a>

> 3 Ways to Clone Objects in JavaScript

```javascript
const food = { beef: '🥩', bacon: '🥓' }


// "Spread"
{ ...food }


// "Object.assign"
Object.assign({}, food)


// "JSON"
JSON.parse(JSON.stringify(food))

// RESULT:
// { beef: '🥩', bacon: '🥓' }

```

## Template Literal <a name='template_literal'></a>

```javascript
// ` ` back tick character
let nameTo = 'John'
let nameFrom = 'Shohan'
const mail = 
`Hi ${nameTo},

Thank you for joining my mailing list.

Regards, 
${nameFrom}
`
console.log(mail)
```
##### Output
```
Hi John,

Thank you for joining my mailing list.

Regards, 
Shohan
```

## Example BlogPost <a name='blog_post'></a>

```javascript
// object literal syntax
let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 10,
  comments: [
    {authur:'a', body:'b'},
    {authur:'c', body:'d'},
  ],
  isAlive: true,
};
```
```javascript
//constructor function
function Post(title,body,author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isAlive = false;
}

const post = new Post('a','b','c')
console.log(post)
```
##### Output
```
Post {
title:"a",
body:"b",
author:"c",
views:0,
comments:(0) [...],
isAlive:false
}
```

Future reading - > math and string built in objects

