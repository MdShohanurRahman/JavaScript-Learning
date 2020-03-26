const numbers = [1, 2, 3];

for (const number of numbers) {
    console.log(number);

}

numbers.forEach((element, index) => {
    console.log(index, element)
});