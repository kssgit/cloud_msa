import React, { useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import TodoClear from './component/TodoClear';
import { Header } from 'semantic-ui-react'


function App(props) {
  const [todoNum , setTodoNum] =useState(0);
  const [title, setTitle] =useState('');
  const [todoList , setTodoList]=useState([]);
  
  const InputTodoList=(t)=>{
    setTitle(t);
    
  }
  const InputSubmit =()=>{
    setTodoNum(todoNum+1);
    todoList.push({title:title,todoNum:todoNum});
    setTodoList(todoList);
    console.log(todoList);
  }

  const hadleDelete=(e,index)=>{
    todoList.splice(index,1);
    setTodoList(todoList);
    console.log(todoList);
  }

  const allClear=()=>{
   
    setTodoList([]);
  }
  return (
    <div>
      <Header as='h1' content='Todo It!!' textAlign='center'/>
      <div style={{textAlign : 'center'}}>
      <TodoInput  InputTodoList={InputTodoList} InputSubmit={InputSubmit}/>
      <TodoList todoList={todoList} hadleDelete={hadleDelete}/>
      <TodoClear allClear={allClear}/>
      </div>
    </div>
  );
}

export default App;