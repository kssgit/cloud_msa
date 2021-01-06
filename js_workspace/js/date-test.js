let dateinfo = { "dert": 213 };

console.log(typeof (dateinfo)); //타입 Object


//date 

let dateObj = new Date();

let dateInfo = {
  year: dateObj.getFullYear(),
  month: dateObj.getMonth() + 1,
  date: dateObj.getDate(),
  hour: dateObj.getHours(),
  localeDate: dateObj.toLocaleString(),
  isoDate: dateObj.toISOString()
}

for (let i in dateInfo) {
  console.log(i + ':' + dateInfo[i]);
}