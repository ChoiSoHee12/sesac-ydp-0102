// const add =(a,b)=>{
//     return a+b;
// }
// const subtract =(a,b)=>{
//     return a-b;
// }

// 이름이 같을 때는 하나만 써도 됨.
// add:add, subtract:subtract
module.exports = {
    add,
    subtract
}


// a = ????
// 앞에 math 없어도됨.
const {add,subtract} = math;

console.log(math);