//Array

let info = [45, 11, 4, 6, 7, 20, 19];

//sort
info.sort(function (a, b) {
  return a - b;
}) // 작은것부터 정렬 (반대는 b-a)

console.log("sort", info.toString());

console.log("----------------------------");

//filter(callback(currentValue[, index[, array]]) --해당 조건에 맞는 배열 찾기

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//for(let i=0 ; i<words.length ; i++)
let result = words.filter(word => word.length > 6);

console.log("filter", result);

console.log("----------------------------");

//find(callback(element[, index[, array]])[, thisArg])  그냥 찾기

let array1 = [5, 12, 8, 130, 44];

let found = array1.find(element => element > 10); //콜벡 메서드 find쓰면 알아서 뒤에거 생성 


console.log("find", found);

console.log("----------------------------");

//join --해당 배열 data 재조합
let elements = ['Fire', 'Air', 'Water'];
console.log("join");

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

console.log("----------------------------");

//forech
let array3 = ['a', 'b', 'c'];

array3.forEach(element => { console.log(element) });

// expected output: "a"
// expected output: "b"
// expected output: "c"
console.log("----------------------------");

//map 새로운 배열 생성 

let array2 = [1, 4, 9, 16];

// pass a function to map
//for(i =0 ; i < array2.length ; i++)
let map1 = array1.map(x => x * 2);

console.log("map", map1);
// expected output: Array [2, 8, 18, 32]

console.log("----------------------------");

//splice -- array 변경 가능(const로 선언해도 변경 가능)   slice(startindex, [deletcount,appenddata]);
//삭제/추가 
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // (어디에  , (0이면 삭제않함) , 무엇을)
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]