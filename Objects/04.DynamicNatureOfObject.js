const circle = {
    radius: 1
};

// cannot re assign circle object cause it is const

circle.color = 'yellow';
circle.draw = function () {}

delete circle.color; // delete object property
delete circle.draw // delete circle property

console.log(circle);