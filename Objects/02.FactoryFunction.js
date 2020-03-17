/*

If we use object literal syntax can use for one implementation. But when we 2 object 
with same property then we have duplicate implementations. So we can use factory function
constructor function for use same property and different objects

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

// shorter factory-function code
function createCircles(radius) {

    return {
        radius,
        draw() {
            console.log('draw circle');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircles(2);
console.log(circle1);
console.log(circle2);