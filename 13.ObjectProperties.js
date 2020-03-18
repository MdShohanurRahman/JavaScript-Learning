/*

1. Configurable - > true
2. Enumerable - > true
3. Writable - > true
4. value - > undefined 

*/

let person = {};

Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});

delete person.ssn; // can't delete



let newPerson = {};
newPerson.age = 25;
newPerson.ssn = '012-38-9119';

Object.defineProperty(newPerson, 'ssn', {
    enumerable: false
});

for (let prop in newPerson) {
    console.log(prop); // age
}



// Accessor Properties

/*

  instead of value it hase get and set properties 

*/

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log(person.fullName); // John Doe


// Define multiple properties: Object.definedProperties()

var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');
// Output: The net price of a Smartphone is 878.90 USD

/* 
JavaScript object property descriptor
*/

let person = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor);

// output 

/* { 
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
} */