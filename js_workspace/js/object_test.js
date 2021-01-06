//class : objecr를 생성하기 위한 template(요구사항을 추상화해서 속성과 기능을 제작한 )
//Object : class type으로 생성된 객체/변수 (클래스 new 생성자를 통해 인스턴스화된 객체 ) 
//1. class 선언(ECMA6버젼 이상에서만 사용가능) -- super키 활성화 가능 
// class 클래스 이름 {
//   변수 선언;
//   함수선언;
//   생성자;
//   메소드; 
// }
class Person {
  _name = "";
  _age = 0; // 다른 언어와 구별하기 위해 _를 쓴다 

  constructor(name, age) {
    this._name = name;
    this._age = age; //this주의 
  }

  print() {
    console.log(`이름 : ${this._name} | 나이 : ${this._age}`);
  }

  //computed
  get birthYear() {
    return 2021 - this._age + 1;
  } // birthYear는 함수가 아니다 
  //맴버변수가 어떠한 로직을 이용해 계산되어야 할 때  

  //action
  set birthYear(year) {
    this._age = 2021 - year + 1;
  }//특정한 조건으로 값을 할당할 때

}

//아직 private 속성을 부여할 수 없다.
//back-end의 set get과 다른 단순히 맴버변수로 생각 

let p = new Person("김성수", 25);
p.birthYear = 1994;// 자바스크립트는 set 사용할 때 자바하고 다르다 !!!!! set    (p.birthYear(1994) 로 코드입력시   not a function error 발생 - type error )
console.log(`생일 ${p.birthYear}`); // get 

p.print();



console.log("-----------------------------");

//2. function 객체로 선언 

function Student(name, age, major) {
  this._name = name;
  this._age = age;
  this._major = major;
  this.print = function () {
    console.log(`이름 : ${this._name} | 나이 : ${this._age} | 전공 : ${this._major}`);
  }
}
// Student.prototype.print : function(){

// }  -- > 옛날 방법
let s = new Student("김성수", 28, "생체의공");
s.print();

console.log("-----------------------------");

//3.JSON(Javascript Object Notation) -- data를 주고 받는 용도로 많이 쓴다 

let e = { person: { name: '김성수', age: 28 }, department: 'back-end 개발자', array: [1, 2, 3, 4], male: true };
let array = [{ name: '김성권', age: 28 }, 1, [1, 2, 3, 4], 'name', false, "null"];
console.log(e);
console.log(array);

//배열과 json의 차이는 json은 반드시 키값과 벨류값이 존재해야 한다 