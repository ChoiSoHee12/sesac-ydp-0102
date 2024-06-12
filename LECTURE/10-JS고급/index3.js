// 클래스

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
    constructor(year, name, window,floor,windowMaker){
        super(year, name, window)
        this.floor = floor;
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
        constructor (width,height) {
            super (width,height)

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
            this.redius = width
        }

        // 원의 넓이(S=πr²)

        getArea() {
            return this.redius**2*Math.PI
        }
    }

    let rec4 = new Circle(3)
    console.log('원의 넓이', rec4.getArea(), '입니다.');