// js 표준 내장 객체
// - 기본적으로 미리 정의된 객체
// - 모든 JS 환경에서 사용할 수 있는 내장 객체들을 말한다.
// - 자주 사용되는 기능을 미리 구현해 놓은 것.

// #1. Date 객체 : 시간, 날짜

// 날짜 생성하여 저장.
let now = new Date(); //변수 할당이 편함.
console.log(now);

// 참고) 타임스탬프 (timestamp)
// : 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// "에포크" 이후의 시간을 나타냄.
// Q) 에포크? - 특정 시간의 기준점
// Q2) Why? 이 시간 이후인가요?
// A) 1. 역사적인 이유 - 유닉스 os에서 타임스탬프를 측정하는데 사용된 날짜 초기 컴퓨터 시간 나타냄.
//    2. 기술적인 편의성 - 시간을 숫자로 표현하는 방법. 수학적으로 편리한 계산을 가능하게함.

// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900

let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970); // 24시간

// new Date(date_string)
let date = new Date('2024-06-03');
console.log("date >", date);

let date2 = new Date('2024', '06', '03'); // MM(0(1월) ~ 11(12월) 주의)
console.log("date2 >", date2);

// 관련 메서드
// 객체 점 접근법
// getDate(): 월의 몇 번째 날인지 반환합니다.
// getDay(): 주의 몇 번째 날인지 반환합니다. (0부터 시작)
// getMonth(): 몇 번째 달인지 반환합니다. (0부터 시작)
// getHours(): 시간을 반환합니다. (0부터 23까지)
// getMinutes(): 분을 반환합니다. (0부터 59까지)
// getSeconds(): 초를 반환합니다. (0부터 59까지)
// getMillisecons(): 밀리초를 반환합니다. (0부터 999까지)
// getTime(): 1970년 1월 1일부터 현재까지의 밀리초 단위의 시간을 반환합니다.

console.log(now.getFullYear()); // 2024
console.log(now.getMonth() + 1); // 0 ~ 11 주의
console.log(now.getDate()); // 3
console.log(now.getHours()); // 13
console.log(now.getMinutes()); // 38
console.log(now.getSeconds()); // 39
console.log(now.getMilliseconds()); // 0 ~ 999
console.log(now.getDay()); // 0(일) ~ 6(토)


console.log("-----------------");

// Math 객체
// 수학적인 상수와 함수

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(100, -2, 0, 5));  // -2
console.log(Math.max(100, -2, 0, 5));  // 100
console.log(Math.round(5.3124)); // 5 -> 반올림
console.log(Math.ceil(5.3124)); // 6 -> 강제 올림
console.log(Math.floor(5.7124)); // 5 -> 강제 내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10

// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// 퀴즈 (실습)
// Q1) 1 ~ 100
console.log(Math.floor(Math.random() * 100)+1); // 1 <= x < 101
// Q2) 20 ~ 22
console.log(Math.floor(Math.random() * 3)+20); // 20 <= x < 23 

//25 -> 하루를 계산한 것.

//29 -> 타임스탬프의 기준시가 09시

// 31 중요.

// ㄴ 31. 46 -> +1 꼭 해주기.


// 52 -> 일요일부터 시작.

// quiz

// 1 ~ 100
console.log(math.floor(math.random() * 100)) + 1;

// 20 ~ 22

console.log(math.random()*3);

/* Date 객체의 getDay() 이용
getDay(): 요일별로 0 ~ 6(일 ~ 토) 으로 숫자 반환
*/
// 1. switch문 이용
switch (now.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log('평일');
      break;
    case 0:
    case 6:
      console.log('주말');
      break;
    default:
      console.log('알수없음');
      break;
  }
  
  // 2-1. if문: if 와 else if 로 모든 경우 일일이 확인
  if (now.getDay() === 0) {
    console.log('주말');
  } else if (now.getDay() === 1) {
    console.log('평일');
  } else if (now.getDay() === 2) {
    console.log('평일');
  } else if (now.getDay() === 3) {
    console.log('평일');
  } else if (now.getDay() === 4) {
    console.log('평일');
  } else if (now.getDay() === 5) {
    console.log('평일');
  } else if (now.getDay() === 6) {
    console.log('주말');
  }
  
  // 2-2. if문: if 와 else 이용
  if (now.getDay() === 5 || now.getDay() === 1 || now.getDay() === 2 || now.getDay() === 3 || now.getDay() === 4) {
    console.log('평일');
  } else {
    console.log('주말');
  }
  
  // 3. 삼항연산자 이용
  const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
  console.log(todayStatus);