import React, { Component } from 'react';
import TodoList from './TodoList'

class TodoContainer extends Component {
  render() {
    return (
      <div className="todo-container">
        <ul>
        <TodoList />
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
