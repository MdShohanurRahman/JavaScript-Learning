const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
];

// predicate function
const course = courses.find(function (course) {
    return course.name === 'a'
})

console.log(course);

/* 
{
    id: 1,
    name: "a"
}
*/

const course = courses.findIndex(function (course) {
    return course.name === 'a'
})

console.log(course); // 0

// using Arrow Function
const course = courses.find(course => course.name === 'a');
console.log(course);