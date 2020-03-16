const circle = {
    radius: 1,
    draw() {
        console.log('draw');

    }
};

const another = {};

// old approach
for (let key in circle)
    another[key] = circle[key];

// modern approach 1 

const another1 = Object.assign({}, circle);

// modern approach 2

const another2 = {
    ...circle
};