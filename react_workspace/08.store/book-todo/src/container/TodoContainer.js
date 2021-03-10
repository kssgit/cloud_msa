import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoEditFormView from '../view/TodoEditFormView';
import generateId from '../IDGenerator';


@inject('TodoStore')
@observer
class TodoContainer extends Component {
    
  onAddTodo=()=>{
    const {addTodo,setTodoProp} = this.props.TodoStore;
    setTodoProp("id",generateId(5));
    addTodo();
  }
    render() {
        const {TodoStore} =this.props;
      
        return (
                <TodoEditFormView
                todo={TodoStore.todo}
                onSetTodoProp={TodoStore.setTodoProp}
                onAddTodo={this.onAddTodo}
                onRemoveTodo={TodoStore.removeTodo}
                onModifyTodo={TodoStore.modifyTodo}
                />
        );
    }
}

export default TodoContainer;