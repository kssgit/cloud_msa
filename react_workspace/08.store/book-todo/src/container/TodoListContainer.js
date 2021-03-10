import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoListView from '../view/TodoListView';

@inject('TodoStore')
@observer
class TodoListContainer extends Component {
    render() {
        const {TodoStore} =this.props;
        return (
            <TodoListView
            todos={TodoStore.todos}
            onSelectTodo={TodoStore.selectTodo}/>
        );
    }
}

export default TodoListContainer;