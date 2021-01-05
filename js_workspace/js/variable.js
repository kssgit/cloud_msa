
//1. var 2.let , const
//변수선언은 let 사용(이유: 유효범위 구분)
//상수선언은 const 사용(값 변경없이read Only로 사용)
//var 은 전역 지역 구분하지않고 사용되기 때문에 
//let은 최근에사용되는 변수선언문으로 let을 사용하여 전역,지역변수를구분해서쓴다
//const는 상수값을 할당하기위해 (값을 변경하지않는 경우) -read only
x =6 ;//값 할당

x = "6";//값이 할당될당시 자료타입(자료의 크기)결정

const constVariable = 10;

let globalVariable = 5; //전역변수
{
    let localVariable =5;//지역변수
    var y = 5;
    console.log("localAVariable",localVariable);
    console.log("globalVariable", globalVariable);
    console.log("var x", x);
    console.log("var y" , y);
    console.log("const", constVariable)
}
//constVariable = 100;//상수는 값을 변경하게되면 에러가난다.

//console.log("localAVariable",localVariable);
console.log("globalVariable", globalVariable);
console.log("var x", x);
console.log("var y" , y);

document.getElementById("data").innerHTML = "<h3>variable x =" + x +"</h3>";
//                                           `

//2. DataType - primitive(int , float , char , boolean), Reference(Class , Array)
 let intV = 10;
 let floatV = 10.5;
 let stringV = "10";
 let booleanV = true;
 console.log("data type ", intV, floatV , stringV , booleanV);
//??


