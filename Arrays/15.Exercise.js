// Array from range 
function arrayFromRange(min, max) {
    const myArray = [];
    for (let i = min; i <= max; i++) {
        myArray.push(i)
    }
    return myArray
};

const numbers = arrayFromRange(2, 5);

console.log(numbers);

// Includes
function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement)
            return true;
        else
            return false
    }
}

const numbers = [5, 2, 3, 4];
console.log(includes(numbers, 5))


// Except

const numbers = [1, 2, 3, 4, 1, 1]

const output = except(numbers, [1, 2]);
console.log(output); // [3,4]

function except(array, excluded) {
    const output = [];

    for (let element of array)
        if (!excluded.includes(element))
            output.push(element)
    return output
}

// Moving an Element

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);
console.log(output)

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length) {
        console.error('Invalid Offset');
        return
    } else {
        const output = [...array];
        const element = output.splice(index, 1)[0];
        output.splice(position, 0, element);
        return output;

    }

}


// Count Occurrence
const numbers = [1, 2, 3, 1, 1];
const s = coutnOfOccurrence(numbers, 1);

console.log(s);

function coutnOfOccurrence(array, searchElement) {
    // let count = 0;
    // for(let element of array)
    //   if (element === searchElement)
    //     count += 1;
    //   return count;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement)
        console.log(accumulator, current, searchElement)
        return accumulator + occurence
    });
}




// Get max

const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max)

function getMax(array) {
    if (array.length === 0)
        return undefined;

    // let max = array[0]

    // for(let i=1; i<array.length; i++ )
    //   if ( max < array[i])
    //     max = array[i]

    // return max;

    /*   return array.reduce((a,b) =>{
        // if(b > a) return b
        // return a;
        return (b>a) ? b: a;
      }); 
      
      */


    return array.reduce((a, b) => (b > a) ? b : a);
}

// Movies Object
const movies = [{
        title: 'a',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'b',
        year: 2018,
        rating: 4.7
    },
    {
        title: 'c',
        year: 2018,
        rating: 3
    },
    {
        title: 'd',
        year: 2017,
        rating: 4.5
    },
]

// All the movies in 2018 with rating > 4 
// Sort them by their rating 
// Decending Order 
// Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)


console.log(titles);