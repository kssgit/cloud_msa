import React, { Component } from "react";
import TodoContainer from "../container/TodoContainer";
import TodoListContainer from "../container/TodoListContainer";


class App extends Component {
 
  render() {
    return (
      <div>
        <TodoContainer/>
        <TodoListContainer/>
      </div>
    );
  }
}

export default App;