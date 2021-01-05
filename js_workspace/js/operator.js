//연산자
//1. 산술연산자 + , * , - , / , % 
let x = 10;
let y =20;

console.log(`${x}+${y}=${x+y}`); //백커트를 이용하여 문자열과 숫자 변수 같이쓰기
console.log(`${x}-${y}=${x-y}`);
console.log(`${x}/${y}=${x/y}`);
console.log(`${x}*${y}=${x*y}`);
console.log(`${x}%${y}=${x%y}`);
console.log(`${x}^${y}=${x^y}`);

//2. 대입연산자  : 다른연산자=
const z = x+y;
//result += x;
console.log(z);
console.log(x += 10 , x -=10 );
//console.log(result);

//3. 비교연산자 : > , < , <= , >= , == , !=  ( ===, !== 는자바스크립트에서만 )

for(let i=1 ; i < x ; i++){
    if(i%2 ==0) console.log(`${i}는 짝수입니다.`);
    else console.log(`${i}는 홀수입니다.`);
}
if(x < y) console.log(`${x}는${y} 보다 작은 수 입니다`);
if(x > y) console.log(`${x}는${y} 보다 큰 수 입니다.`);
if(x != y) console.log(`${x}는${y} 보다 다른 수 입니다.`);
if(x == y) console.log(`${x}는${y} 보다 같은 수 입니다.`);
if(x == "10")
if(x === "10")
//4.논리연산자  : &&(and) ,||(or) , !
if( (x<y) && x>0 ) console.log(`${x}는 ${y} 보다 작은 양수입니다.`);

//5.비트연산자 : & , | , ^ ,~ , >> , <<(쉬프트연산자)

//6. 삼항연산자: 조건? 참 : 거짓
x == y  ? console.log(`${x}==${y}`) : console.log(`${x}!=${y}`);

