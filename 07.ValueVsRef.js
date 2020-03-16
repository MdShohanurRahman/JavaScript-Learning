/* value types 
    Number
    String
    Boolean
    Symbol
    undefined
    null

Reference Type
    Object
    Function
    Array */


let obj = {
    value: 10
};

function increase(number) {
    obj.value++;
}

increase(obj);
console.log(obj);