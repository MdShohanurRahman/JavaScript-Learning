// hide the details show only essentials

function Circle(radius) {
    this.radius = radius
    let defaultLocation = {
        x: 0,
        y: 0,
    }
    let computeOptimumLocation = function (factor) {
        // ...
    }

    this.draw = function () {
        computeOptimumLocation(0.1)
        console.log('draw')
    }
}

const circle = new Circle(10)
circle.draw()