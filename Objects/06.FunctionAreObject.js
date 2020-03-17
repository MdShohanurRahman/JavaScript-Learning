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