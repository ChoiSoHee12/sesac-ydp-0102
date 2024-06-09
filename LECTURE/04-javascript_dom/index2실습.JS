let now = new Date().getDay();
console.log(now);

if(now === 0 || now === 6) {
    console.log('weekend');
} else(console.log('weekday'));


// 난수(정의된 범위 내에서 무작위로 추출된 수) 생성

// console.log(Math.floor(Math.random() * 11));
console.log(Math.floor(Math.random() * 10)+1);