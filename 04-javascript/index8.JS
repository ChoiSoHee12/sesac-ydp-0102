// 반복문

// for문

for (let i = 0; i < 10; i++) {
    // i가 0~9 총 10번 반복
    console.log('안녕', i);
}

// 1 ~ 5 출력

for (let i = 1; i <=5; i++) {
    console.log(i);
}

// 5 ~ 1 출력

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i<=10; i++) { 
sum = sum + i;
}
// sum 변수에 재할당한다고 생각하면 됨.


// *t실습*

// 1 ~ 20 중에서 짝수일 때의 합을 굴하기.
let sum2 = 0; 

for (let i = 1; i <= 20; i++) {
     if ( i % 2 === 0) {
        sum2 = sum2 + i
     }
}

// while문
let idx = 0;


// 구구단 - while문 -

let i = 2, j = 1;
while (1 < 10) {
    while(j < 10) {
        console.log(i, "x", j, "=". i*j);
        j++;
    }
    i++;
    j = 1;
}
// 구구단 - for문 -


//////////////////////////////////////////


//////////////////////////////////////////
// break & continue

///////////////////////////////////////////

// * 실습문제1 배수 찾기 * //

for( let i = 0; i <= 10000; i++) {
if(i % 13 === 0 && i % 2 !==0 ) {
    console.log(i);
}
}