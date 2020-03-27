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

Here we can see that draw method take extra memory for every instance.And we already know that it has built in **proto** , so our job is to be add draw method in that **proto**

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
