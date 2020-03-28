# Object Oriented Programming

### 4 pillar

    1.Encapsulation
    2.Abstraction
    3.Inheritance
    4.Polymorphism

> Encapsulation : Reduce complexity + increase resusability

> Abstraction : Reduce complexity + isolate impact of changes

> Inheritance : Eliminant redundant code

> Polymorphism : Refactor ugly switch/case statement

## Inheritance

> 2 types

    1. classical
    2. prototypical

**Constructor :**

> A constructor is a pointer. It points to the Function() that created the point from which you are retrieving the constructor from. Let's see the following code:

```javascript
var MarkBlueprints = function StarkIndustries() {};
/*
If we used StarkIndustries to create an object (in our case a deadly robot), 
we can say that the object constructor is StarkIndustries. 
*/

var mark_I = new MarkBlueprints();
mark_I.constructor; // returns function StarkIndustries(){}
```

**Prototype**

> The keyword prototype is a property of Function() objects. No other type of objects have this property. By now you should realize that whenever you type in your console Object or Array you are actually calling the Javascript default functions; give it a try:

```javascript
typeof String; // returns function

String.prototype; // return all method
```

## Prototypical

```javascript
// A prototype is just a regular object.
// Every object has a prototype or parent except root object

let x = {};
let y = {};

// both x and y has __proto__
// which is baseObject

Object.getPrototypeOf(x) === Object.getPrototypeOf(y);
// true
// or
x.__proto__ === y.__proto__;
// true
```

## Multilevel Inheritance

```javascript
// goto console and write
let myArray = [];
```

> `myArray ->arrayBase-> objectBase`

> `Object created by given constructor will have the same property`

```javascript
let person = { name: "mosh" };

for (let key in person) console.log(key);

let objectBase = Object.getPrototypeOf(person);
console.log(objectBase); // see in console

let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);
/* {
value:f toString {...},
writable:true,
enumerable:false,
configurable:true
} */
```

### Changing property attribute of an object

```
writeable: false -> read only
enumarable: false -> not show in Object.keys
configurable: false -> can not delete
```

```javascript
let person = { name: "mosh" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false
});
```

## Construtor Prototypes

```javascript
// myObj.__proto__(parent Of myObj)
// Constructor.prototype()

// both are same

// example
let obj = {};
// see in console
obj.__proto__;

// when we create object, object literal syntex
// it looks like -> new Object(), that's are constructor
// so this constructor(Object) has prototype property

// have a look as previous, both are same
Object.prototype;

// another example
let array = [];
array.__proto__;
Array.prototype;
```

## Prototype vs Instance Member

First consider the following example

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const c1 = new Circle(1);
```

> Here we can see that draw method take extra memory for every instance.And we already know that it has built in **`__proto__`** , so our job is to be add draw method in that **`__proto__`**

```javascript
function Circle(radius) {
  //instance member
  this.radius = radius;

  this.move = function() {
    // this.draw();
    console.log("move");
  };
}

// prototype member
Circle.prototype.draw = function() {
  // this.move();
  console.log("draw");
};

const c1 = new Circle(1);
console.log(c1);

// override toString() method
Circle.prototype.toString = function() {
  return "circle with radius " + this.radius;
};
```

## Iterating Instance and Prototype

```javascript
console.log(Object.keys(c1));
```

#### Output

> `Only return instance member`

`["radius","move"]`

```javascript
// return all members (instance + prototype)
for (let key in c1) console.log(key);
```

```javascript
// check own property
console.log(c1.hasOwnProperty("radius"));
// return true or false
```

## StopWatch Example

```javascript
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}
```

## Creating your own prototypical inheritance

```javascript
function Shape() {}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

function Circle(radius) {
  this.radius = radius;
}

/*
// inherit from objectBase
Circle.prototype = Object.create(Object.prototype) ;  
*/

// inherit from shapeBase
Circle.prototype = Object.create(Shape.prototype); // reset prototype
Circle.prototype.constructor = Circle; // reset constructor

Circle.prototype.draw = function() {
  console.log("draw");
};
```

## Calling The Super Constructor

```javascript
function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

function Circle(radius, color) {
  Shape.call(this, color); // calling super
  this.radius = radius;
}

// inherit from shapeBase
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log("draw");
};
```

## Intermediate function Inheritance

```javascript
function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

// inherit from Parent
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

// inherit from shapeBase
extend(Circle, Shape);

function Square(size) {
  this.size = size;
}

// inherit from shapeBase
extend(Square, Shape);

Circle.prototype.draw = function() {
  console.log("draw");
};
```

## Method Overriding

```javascript
function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

// inherit from Parent
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

// inherit from shapeBase
extend(Circle, Shape);

// method overriding
Circle.prototype.dublicate = function() {
  Shape.prototype.dublicate(); // calling parent
  console.log("dublicate Circle");
};

const circle = new Circle();
console.log(circle.dublicate()); // dublicate Circle
```

## Polymorphism

```javascript
function Shape(color) {
  this.color = color;
}

Shape.prototype.dublicate = function() {
  console.log("dublicate");
};

// inherit from Parent
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  Shape.call(this, color); // calling super
  this.radius = radius;
}

// inherit from shapeBase
extend(Circle, Shape);

// method overriding
Circle.prototype.dublicate = function() {
  Shape.prototype.dublicate(); // calling parent
  console.log("dublicate Circle");
};

function Square() {}

extend(Square, Shape);
Square.prototype.dublicate = function() {
  console.log("dublicate square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.dublicate();
}
```

## Mixins (composition)

```javascript
const canEat = {
  eat: function() {
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("walk");
  }
};

const canSwim = {
  swim: function() {
    console.log("swim");
  }
};

const person = Object.assign({}, canEat, canWalk);
console.log(person);
```

> `If we use constructor function then the following structure should follow`

```javascript
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("walk");
  }
};

const canSwim = {
  swim: function() {
    console.log("swim");
  }
};

// consturctor function
function Person() {}

// mixin object in Person prototype
// Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);
```

## At A Glance (prototypical inheritance)

```javascript
function Shape() {}

function Circle() {}

// Prototypical inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Rectangle(color) {
  // To call the super constructor
  Shape.call(this, color);
}

// Method overriding
Shape.prototype.draw = function() {};
Circle.prototype.draw = function() {
  // Call the base implementation
  Shape.prototype.draw.call(this);

  // Do additional stuff here
};

// Don't create large inheritance hierarchies.
// One level of inheritance is fine.

// Use mixins to combine multiple objects
// and implement composition in JavaScript.
const canEat = {
  eat: function() {}
};

const canWalk = {
  walk: function() {}
};

function mixin(target, ...sources) {
  // Copies all the properties from all the source objects
  // to the target object.
  Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);
```

## Example Of Prototypical Inheritance

```javascript
function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focued");
};

function HTMLSelectElement(items = []) {
  this.items = items;

  this.addItem = function() {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

/* if you have a function where you get constructor
dynamically, and you want to create an instance of 
an object based on that constructor, then you have 
to reset the constructor property
 */

HtmlElement.prototype = new HtmlElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
```

## Exercise Polymorphism

```javascript
function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focued");
};

function HTMLSelectElement(items = []) {
  this.items = items;

  this.addItem = function() {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function() {
    return `
    <select> ${this.items
      .map(
        item => `
    <option> ${item} </option>`
      )
      .join("")}
    </select>`;
  };
}

function HtmlImageElement(src) {
  this.src = src;
  this.render = function() {
    return `img src = ${this.src} </>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement; // reset constructor
```

## ES6 Class

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

## Static Method

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

## this keyword in class block

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

## Getter and Setter

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

## Inheritance

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

## Method Overriding

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

## Example (stack implementation)

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
