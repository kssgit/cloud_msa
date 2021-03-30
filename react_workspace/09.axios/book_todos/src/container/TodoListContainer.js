import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoListView from '../view/TodoListView';

@inject('TodoStore')
@observer
class TodoListContainer extends Component {
    
    componentDidMount(){ //??? 라이플 사이클 해당 컴포넌트가 Dom에 파싱되고 브라우져에 뿌려질 때 실행
        this.props.TodoStore.selectAll();
    }

    onSelectTodo =(id)=>{
        this.props.TodoStore.selectTodo(id);
    }

    render() {
        return (
            <TodoListView todos={this.props.TodoStore.todos} 
                          onSelectTodo={this.onSelectTodo}/>
        );
    }
}

export default TodoListContainer;