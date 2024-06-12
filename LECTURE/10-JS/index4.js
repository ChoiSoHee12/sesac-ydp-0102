// 논리 연산자 &&(and)     || (or)

const x = 5;
const result = x || 100; // 첫번째 값이 true이므로 다른 거 볼 필요 x
console.log(result);

const y = 7;
const result2 = x < y && 'yy가 큼'
console.log(result2); // 'yy가 큼'

// falsy: undefined, null, 0, false, '', NaN

let userColor =  undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor)