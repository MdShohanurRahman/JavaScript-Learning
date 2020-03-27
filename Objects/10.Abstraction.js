// hide the details show only essentials

function circle(radius) {
    this.radius = radius;
    this.defaultLocation = {
        x: 0,
        y: 0
    };
    this.computeOptimumLocation = function (factor) {
        // ...
    };

    this.draw() = function () {
        this.computeOptimumLocation(0);
        console.log('draw');
    };


}