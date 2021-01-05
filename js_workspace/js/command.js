//1. 조건문 
//if (조건식) 참일때 실행문;

let month = prompt("월 입력 : " ,"");

// if(month == 1 || month == 3 || month==5 || month==7 || month==8 || month==10 || month==12 ){
// console.log(`${month}월은 31일 까지 있습니다.`)
// }else if(month==2){
//     console.log(`${month}는 28일까지있습니다 `)
// }else if(month==4 || month == 6 || month==9 || month==11 ){
//     console.log(`${month}는 30일까지있습니다.`)
// }else{
//     console.log(`${month}월이 맞는지 확인하세요 `)
// }

//switch(변수명){  여기서는변수가지고구분하기때문에(prompt는문자로값을받는다) 
//  case 변수값 : 실행문
//               break;
//  default: 기타실행문;
//}
switch(month){
    case '1','3','5','7','8','10','12':
       console.log(`${month}월은 31일 까지 있습니다.`);
       break;
    case '2':
        console.log(`${month}는 28일까지있습니다 `);
        break;
    case '4','6','9','11':
        console.log(`${month}월은 30일 까지 있습니다.`);
        break;
    default:
        console.log(`${month}월이 맞는지 확인하세요 `);

}


//반복문 
//초기값 ;                        초기값;                               for(초기값; 조건식; 증감식;){
//while(조건식){ --무한반복        do{       --최소한번은실행해야할때           실행문;
// 참일때 실행문;                    실행문;                               }
// 증감식                            증감식;                            for(데이터 in|of 리스트데이터){ --foreach문
//}                                }while(조건식);                       실행문; } 


console.log('----------------------------------');

let index = 0;

while(index < 11 ){
    index ++; //index +=1; (후행증감)
    console.log(`index = ${index}`);
}

console.log('----------------------------------');

index =0;

do{
index ++;
console.log(`index = ${index}`);
}while(index <10 );

console.log('----------------------------------');

for (i = 1 ; i < 10 ;i++){
   console.log(`index = ${i}`) ;
}

console.log('----------------------------------');
//기타 : return - 함수 종료(반환), break - 반복문 종료 , continue - 반복문으로돌아가기(띄어가기)
let sum = 0;
for (i = 1 ; i <11 ; i++){
    if(i%2 ==0) continue;
    sum +=i;
}
console.log(sum);

console.log("----------------------------------");

for(i = 1 ; i < 10 ; i ++){
    for(j =1 ; j <10 ; j++){
        console.log(`${i}*${j}=${j*i}`);
    }//inner
    console.log("") ;
}//outer




