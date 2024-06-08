// 내장 메소드와 내장객체 실습 내장 메소드 실습문제1 - 배열과 합

let arr = [];
for(let i = 1; i <= 100; i++) {
    arr.push(i);
}

console.log(arr);

// for문
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum+=arr[i];
}

console.log(sum);

// for of문
let sum2 = 0;
for(let add of arr) {
    sum2 += add;
}

console.log(sum2);

// forEach문
let sum3 = 0;
arr.forEach((add) => {
    sum3 += add;
});

console.log(sum3);