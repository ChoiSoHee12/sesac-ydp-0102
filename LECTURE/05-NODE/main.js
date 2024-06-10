// const add = require('./m1')
// console.log('add(1,2)');
// const math = require('./m2')
// const {add, subtract} = math;
// console.log(math.add(1,2));
// console.log(math.subtract(10,5));
// console.log(add(1,2));
// console.log(subtract(10,5));

// ------------------------------------------------------
const add = (a,b) => {
    return a+b;
}
const subtract =(a,b) => {
    return a-b;
}
module.exports =  {
    add: add,
    subtract: subtract
}