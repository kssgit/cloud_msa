let todoInputHandler = function () {
  //todos 배열에{todoNum:todos.length+1}   #todoInput에 입력된 value갑 추가 , todoNum은 todos.length +1
  const text = document.getElementById("todoInput").value;
  //const index = todos.find(todo => todo.length - 1 === todo.todoNum) + 1;
  const result = todos.map(todo => todo.todoNum);
  // const index = Math.max.apply(null, result) + 1;
  const index = Math.max(...result) + 1;

  todos.push({ todoNum: index, title: text });
  //todoList rendering
  console.log(todos);
  displayList();
}

let todoDeleteHandler = function (todoNum) {
  //todo배열에서 todoNum에 해당하는 데이터 삭제

  const index = todos.findIndex(todo => todo.todoNum === todoNum);//todoNum에 해당하는 index 삭제 
  todos.splice(index, 1);

  //todoList rendering
  displayList();
}

let todoClear = function () {
  //todos 배열 empty
  todos = [];
  //todoList rendering
  displayList();

}

function displayList() {
  const todoList = document.getElementById("todoList");

  let dataList = "";

  todos.forEach(todo => {
    dataList +=
      `<li class="shadow">
             
    <i aria-hidden="true" class="checkBtn fa fa-check"></i> ${todo.title}
    <span type ="button" class="removeBtn"  onClick="todoDeleteHandler(${todo.todoNum})">
      <i aria-hidden="true" class="fa fa-trash-o"></i>
     </span> 

    </li>`

  });
  todoList.innerHTML = dataList;
}

//JSON.stringify({ todoNum: key, title: addTitle }) json형태의 자료형을 string으로 변경 -- 많이 쓰인다 
//JSON.parse(localStorage.getItem(key)) JSON형태로 데이터 받으려면  