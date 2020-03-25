/* 
javaScript has a property called constructor

 */

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

// constructor Function
function Circle(redius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');

    }
}

const another = new Circle(2);

/*
now see the console 
-> another.constructor
-> circle.constructor 
 */

/* 
let x = {} is same as let x = new Object();
*/



// built in constructor

new String(); // '' , " ", ``
new Boolean(); // true, false 
new Number(); // 1, 2, 3

/*  

when we create object literal syntax 
then Object is a built in constructor 

*/