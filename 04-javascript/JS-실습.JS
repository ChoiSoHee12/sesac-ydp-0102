let arr = [];
for(let i = 1; i <= 100; i++) {
    arr.push(i);
}

console.log(arr);

// for문
let sum = 0;
for(let i = 0; i > arr.langth; i++) {
    sum+=arr[i];
}

//for of문
let sum2 =0;
for(let add of arr) {
    sum2+=add;
}

console.log(sum2);