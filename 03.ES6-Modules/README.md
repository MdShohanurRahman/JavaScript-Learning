# **Modules**

1. Maintainability
2. Reuse
3. Abstract

```javascript

// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules 

// CommonJS (Used in Node)
// Exporting 
module.exports.Cirlce = Circle; 
// Importing 
const Circle = require('./circle');

// ES6 Modules (Used in Browser)
// Exporting
export class Square {}
// Importing 
import {Square} from './square'; 

// We use Babel to transpile our modern JavaScript code 
// into code that browsers can understand (typically ES5). 

// We use Webpack to combine our JavaScript files into a
// bundle. 

```

## CommonJs modules

> create a file `circle.js`

```javascript
// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// only export Circle class for abstraction
module.exports = Circle;
```

> Now create index.js file

```javascript
const Circle = require("./circle");

const c = new Circle(10);
c.draw();
```

## ES6 modules

```javascript
will code paste here later.
```

# ES6 Tooling

2 kind of tools
    1. transpiler (translator + compiler)
      ``example: bable``
    2. Bundler (manyFile -> oneFile)
      ``example: webpack``


### working with babel

```bash
// check node version
node -v 

// create folder
mkdir 04.Tooling

// change directory
cd 04.Tooling

// initialize node project
npm init --yes

// install babel 3 packages
npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev

// cli => commandline interface
// core => core of babel logic
// preset => plugin(understand all new features)

// update package.json -> `scripts` section

  "scripts": {
     "babel":"babel --presets env index.js -o build/index.js"
  },

// create a folder `04.Tooling/build`

// run the script
npm run babel

// goto build folder and see the code

```

### Working with webpack









