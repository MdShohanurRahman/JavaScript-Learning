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