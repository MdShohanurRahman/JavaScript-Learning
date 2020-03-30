# **ES6 Class**
# Table of contents <a name="TOC"></a>
1. [Static Method](#Static_Method)
2. [this keyword](#this_keyword)
3. [Private members using Symbols()](#PrivatemembersusingSymbols)
4. [Private members using WeakMaps()](#PrivatemembersusingWeakMaps)
5. [Getter Setter](#GetterSetter)
6. [Inheritance](#Inheritance)
7. [Super()](#Super())
8. [Method Overrriding](#methodoverrriding)
9. [Class At A Glance](#ClassAtAGlance)
10.[Stack Implementation Using Class](#StackImplementationUsingClass)


> Here is the new way to create objects and implement inheritance

```javascript
// pervious code
/* function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
 */

// in ES6

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function() {};
  }

  draw() {
    console.log("draw");
  }
}
```

## Static Method <a name='Static_Method'></a>

```javascript
// pervious code
/* function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}
 */

// in ES6

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // instance
  draw() {
    console.log("draw");
  }

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius": 1}');
console.log(circle);
```

#### Output

```
Circle {
radius:1
}
```

## this keyword in class block <a name='this_keyword'></a>

```javascript
function Circle() {
  this.draw = function() {
    console.log(this);
  };
}

const c = new Circle();
const draw = c.draw;
draw(); // [object Window]
```

to prevent this problem use `'use strict';` top of the code
<br>

**Now have a look in class syntax**

>

```javascript
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw(); // undefined
/* 
block of the class code automatically
in the stric mode.can not override the
global object
*/
```

<a name='PrivatemembersusingSymbols'></a>
## Private members using `Symbols()` 
```javascript
// create private property using Symbol()

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}

const c = new Circle(1);
/* const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); */
```
<a name='PrivatemembersusingWeakMaps'></a>
## Private Members using `WeakMaps()`

```javascript
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      // don't use regular function
      console.log("move", this);
    });
  }

  draw() {
    _radius.get(this);
    _move.get(this)(); // cause function
    console.log("draw");
  }
}

const c = new Circle(1);
```

<br>

> Similar Code base

```javascript
const privateProps = new WeakMap();

class Circle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {
        console.log(move, this);
      }
    });
  }
  draw() {
    privateProps.get(this).radius;
    privateProps.get(this).move;
    console.log("draw");
  }
}

const c = new Circle(1);
```

## Getter and Setter <a name='GetterSetter'> </a>

```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  // get radius like an object
  // same as Object.defineProperty wher we set and get method

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}
const c = new Circle(1);
```

## Inheritance <a name='Inheritance'> </a>

```javascript
class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  draw() {
    console.log("draw");
  }
}

const circle = new Circle();
/*you can access both 2 methods 
circle.draw
circle.move */
```
<a name='Super()'> </a>
## `Super()` keyword for constructor inheritance

> **Note:** If a parent class has a constructo and in the child class there is also a constructo then we should use super keywod for call the parent constructor (also passing sufficient argument if u want)

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor() {
    super("blue");
  }
  draw() {
    console.log("draw");
  }
}

const circle = new Circle();

console.log(circle.draw()); // draw
console.log(circle.color); // blue
```

## Method Overriding <a name='methodoverrriding'> </a>

```javascript
class Shape {
  move() {
    console.log("shape move");
  }
}

class Circle extends Shape {
  move() {
    super.move(); // parent
    console.log("circle move"); // override
  }
}

const circle = new Circle();
console.log(circle.move());
```
<a name='ClassAtAGlance'> </a>
## Example (class at a glance) 

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // These methods will be added to the prototype.
  draw() {}

  // This will be available on the Circle class (Circle.parse())
  static parse(str) {}
}

// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
  constructor(size) {
    // "Kind of" private property
    this[_size] = size;
  }

  // "Kind of" private method
  [_draw]() {}

  // By "kind of" I mean: these properties and methods are essentally
  // part of the object and are accessible from the outside. But accessing
  // them is hard and awkward.
}

// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
  constructor(width) {
    _width.set(this, width);
  }

  draw() {
    console.log("Rectangle with width" + _width.get(this));
  }
}

// WeakMaps give us better protection than symbols. There is no way
// to access private members implemented using WeakMaps from the
// outside of an object.

// Inheritance
class Triangle extends Shape {
  constructor(color) {
    // To call the base constructor
    super(color);
  }

  draw() {
    // Call the base method
    super.draw();

    // Do some other stuff here
  }
}
```
<a name='StackImplementationUsingClass'> </a>
## Stack Implementation Using Class

```javascript
const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Stack is empty.");

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Stack is empty.");

    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
```
