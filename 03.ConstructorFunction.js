/*
Naming convention is PascalNotation -> OneTwoThree
*/


function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');

    }
}


// initialize object

const circle = new Circle(1);

/*

when we use new operator 3 things happened
    1. create an empty object {}
    2. set this to point to empty object
    3. finally it will return that object from this function

*/