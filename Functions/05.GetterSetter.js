const person = {
    firsName: 'shohanur',
    lastName: 'rahman',
    get fullName() {
        return `${person.firsName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firsName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Shohanur Rahman';
console.log(person.fullName);

/* 
getters => access properties
setters => change (muted) them
*/