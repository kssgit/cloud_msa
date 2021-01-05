// 1. javascript는 일급함수 
//정의 : fucntion 함수명 ([parameter , ....]){구현; [return data;] } 일급함수 
//호출 : let data =  함수명([parameter 값, .....]);
// parameter , return data 에 함수 사용 가능 
// ===
// let functionV = function([parameter]){구현 [return data;] }
//functionV :  함수객체 
//익명함수   람다식  arrow function : ([parameter, paramter , .... ]) => {구현 [return data ;]}    --한번만쓸 함수들 


//함수정의 
function add(x , y){
    //typeof 를이용해 해당 파라미터의 타입을 확인하고 처리 가능 
    return x + y;
}

//함수사용
let sum = add(10 , 20 );

console.log(`add(10,20)=${sum}`);

//주의 
// 함수호출시 순서 !! 

//익명함수( object function --> 파라미터로전달 가능 )
// let substract = function(x ,y){
//     return x - y;
// }
let substract =(x,y) => {return x-y};
console.log(`substract(20,10) = ${substract(20,10)} ${typeof substract} ${substract}`);

//arrow function(가장 많이쓴다 )***************
let devide = (x , y ) => {return x/y};
console.log( "devide(20,10) =", devide(20,10)) ;

//함수 선언 및 실행(동시에 --객체 선언하지않고) ******************
((x,y) => { console.log('multiply(x,y)', x*y)})(20,10);


//함수를 리턴하는 클로져함수 ???? 오버라이딩 ?? 
//함수에서 다른함수 리턴 -- 콜백함수
// 중요@@!!!@!
function makeAdder(x) {
    let y=1; //makeAdder function local variable 
    return function(z){
        y=100;  //외부함수 local variable 사용 -- 자신을 감싸고있는 함수의 변수 사용 가능 
        return x+y+z;
    }
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);
console.log(add5(5) , add5);
console.log(add10(2) , add10);

//클로져
function multi(n){
    return function(){

        return n*=n;
    }
}

let multi5 = multi(5);
let multi10 = multi(10);
console.log(multi5, multi5());
console.log(multi10 ,  multi10());

//재귀함수 ( 잘쓰지않는다 )
let result = 1 ;
function factorial(n){
    if(n==0){
        console.log('호출 끝');
    }else{
        console.log('호출'+ n);
        result *=n;
        factorial(n-1);
        
    }

    return result;
}

console.log(factorial(10));