const person = {
    firsName: 'shohanur',
    lastName: 'rahman',
    get fullName() {
        return `${person.firsName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof (value) !== 'string')
            throw new Error('Value is not string');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter FirsName and LastName');
        this.firsName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'Shohanur';
    console.log(person.fullName);

} catch (e) {
    console.log(e.message);
    // alert(e)
}