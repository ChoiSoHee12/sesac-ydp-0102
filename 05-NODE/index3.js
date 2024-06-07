// math3모듈 불러오기
const math3 = require('./math3')
// console.log(meth3);
console.log(meth3.PI);
console.log(math3.E);
console.log(math3.add(3,6))

/////////////////////////////////////////

const {add, PI, E} = require('./math2');
console.log(PI)
console.log(E);
console.log(add(2,5))