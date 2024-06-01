// 배열에서 반복문 사용하기!

// - 기본 for문
// - for of 문
// - foreach() 메서드

// 배열) for문 사용 이유
const fruits = ['사과', '배', '포도', '망고', '바나나'];
console.log(fruits.length); // 배열의 요소 개수 = 배열 크기(길이)

// Tip)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]); 이렇게 힘들잖아...
for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]); // -> 간결하게 하고 싶으면 자유! ; 다 나와줌.
}
console.log('-----------');

// Ex)
const arr = [1, 2, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd'];

// #1. 기본 for문
for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}
console.log('---------------');

// #2. for...of 반복문
// 이 반복문은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 x
// *순서가 있는* 구조 반복에 적합.
// 배열 'alphabets'의 각 요소를 반복하면서 'alpha' 변수에 순서대로 할당하고, 각각 요소에 대해 반복문 블록 실행
for (let alpha of alphabets) {
    console.log('alpha > ',alpha);
} // alpha >  a
  // alpha >  b
  // alpha >  c
  // alpha >  d
console.log('---------------'); 

// #3. forEach() 메서드
// 배열의 각 요소에 대해 지정된 함수를 실행.
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행 할 때 사용
// 각 요소에 대해 함수가 호출될 때마다, 해당 요소가 함수의 인자로 전달됩니다.

alphabets.forEach(function (alpha) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    console.log(alpha);
});

alphabets.forEach(function (alpha, idx) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    console.log(alpha, idx);
});

alphabets.forEach(function (alpha, idx, arr) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    // arr: forEach를 호출한 배열
    console.log(alpha, idx, arr);
});

// ** 참고) 배열의 합 3가지 방법 - 나중에 해봐라
// let numbers2 = [1, 2, 3, 4, 5, 6];
// var sum1 = 0;
// var sum2 = 0;
// var sum3 = 0;

// for (let i = 0; i < numbers2.length; i++) {
//   console.log(numbers2[i]);
//   sum1 = sum1 + numbers2[i];
// }

// for (let num of numbers2) {
//   sum2 = sum2 + num;
// }

// numbers2.forEach((num) => {
//   sum3 = sum3 + num;
// });

// console.log(sum1, sum2, sum3);

console.log('---------------');


// 63 -> alphabets를 말함. 


// 

// filter = 내가 원하는 조건의 애들만 뽑겠다!
// -> 새로운 팀(배열) 완성!

