// 클래스

/** 인스턴스(instance)
 * 인스턴스(instance)는 클래스의 구체적인 구현체를 의미합니다. 클래스는 객체를 정의하는 템플릿(또는 청사진)이고, 
 * 인스턴스는 그 클래스를 기반으로 생성된 실제 객체 **/

// 인스턴스의 예 
    class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `안녕하세요, 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`;
    }
}

// 1) 먼저 Person이라는 클래스를 정의함
// 이 클래스는 사람의 이름과 나이를 속성으로 가지고, 자신을 소개하는 메서드를 포함합니다.

const person1 = new Person('철수', 25);
const person2 = new Person('영희', 30);

// 2) Person 클래스의 인스턴스 생성

// ㄴ> person1과 person2는 Person 클래스의 인스턴스
//     각 인스턴스는 name과 age 속성을 가지며, introduce 메서드를 사용할 수 있음.

console.log(person1.introduce()); // 출력: 안녕하세요, 제 이름은 철수이고, 나이는 25살입니다.
console.log(person2.introduce()); // 출력: 안녕하세요, 제 이름은 영희이고, 나이는 30살입니다.


// 요약
// 1) 클래스 (Person): 사람의 이름과 나이를 정의하고, 자신을 소개하는 메서드를 포함하는 청사진.
// 2) 인스턴스 (person1, person2): Person 클래스를 기반으로 생성된 실제 객체.
//    person1은 이름이 '철수'이고, 나이가 25살인 사람.
//    person2는 이름이 '영희'이고, 나이가 30살인 사람.
// 3) 메서드 호출: 각 인스턴스는 introduce 메서드를 사용하여 자신을 소개할 수 있음.

// ------------------------------------------------------------------------------------------ //

class House {
    constructor (year, name, window){
        this.year =  year;
        this.name = name;
        this.window = window;
    }
    
    getAge(){
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요! `);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
}

const house1 = new House(1990, '롯데', 1) // 클래스를 이용해서 인스턴스 생성시 construxtor에 선언된 매개변수대로 값을 지정해야 한다.

// console.log(house1);
// console.log(typeof house1);
// console.log(house1.year);
// house1.getAge();;
//house1.getWindow();

// 클래스의 상속

class Apartment extends House{
    // Apartment 클래스는 House 클래스를 상속 받음 (extends House).
    // = 자식 클래스(Apartment)가 부모 클래스(House)를 기반으로 만들어질 것임

    constructor(year, name, window,floor,windowMaker){ //  객체의 초기 상태

        super(year, name, window) // 상위(부모) 클래스

        this.floor = floor; // window 브라우저와 헷갈리지 않기 위해 '이곳'을 지정.
        this.windowMaker = windowMaker
    }
    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의
            총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
      }


     // override (오버라이드) 부모의 메소드와 같은 함수를 재정의할때
     getWindow() {
        return `${this.name} 아파트의 ${this.window} 개의 창문은 
            ${this.windowMaker} 회사에서 생산되었습니다.`;
      }
}

    // const apt1 = new Apartment()

    // const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
    // console.log(apt1)
    // console.log(apt1.getAptInfo());
    // console.log(apt1.getWindow());

    // 직사각형 실습 //

class Shape {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

        getArea() {
            return this.width * this.height; 
        }
    }


// let rec1 = new Shape(3,4);
// console.log(rec1.getArea());

// class Shape {
//         constructor (가로, 세로) {
//             this.가로 = 가로;
//             this.세로 = 세로;
//         }
    
//             getArea() {
//                 return this.가로 * this.세로; 
//             }
//         }
    
    
    // let rec1 = new Shape(3,4);
    // console.log(rec1.getArea());

    // 다양한 도형 실습

    // 1) 직사각형

    class Rectangle extends Shape {
        constructor (width,height)  {
            super (width,height)  // 부모 클래스의 생성자를 호출하는(불러오는) 의미

        }
    

    getArea() {
        return this.width * this.height;
    }
  
  // 대각선

  getDiagonal() {
    return Math.sqrt(this.width**2 + this.height**2)
  }
}

let rec2 = new Rectangle(6,4);
    console.log('직사각형 넓이', rec2.getArea(), '입니다.');
    console.log('직사각형 대각선 길이', rec2.getDiagonal(), '입니다.');

    // 2) 삼각형

    class Triangle extends Shape {
        constructor(width,height) {
            super(width,height)
        
        }

        // 넓이

        getArea() {
            return this.width * this.height / 2
        }
    }

    let rec3 = new Triangle(4,6);
    console.log('삼각형의 넓이', rec3.getArea(), '입니다.');

    // 3) 원

    class Circle extends Shape {
        constructor(width,height,redius) {
            super(width,height)
            //  this.redius = redius // 부모 클래스에서 지정된 적이 없기 때문에 NaN이 나옴.
            this.redius = width
        }

        // 원의 넓이(S=πr²)

        getArea() {
            return this.redius**2*Math.PI
        }
    }

    let rec4 = new Circle(3)
    console.log('원의 넓이', rec4.getArea(), '입니다.');