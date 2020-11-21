import React, { Component } from 'react';
import TodoList from './TodoList'

class TodoContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map(todoObj => {
      return <TodoList {...todoObj} key={todoObj.id} deleteTodo={this.props.deleteTodo} markComplete={this.props.markComplete}/>
    })
  }

  render() {
    return (
      <div className="todo-container">
        <h3>KYLE'S TODOS</h3>
        <ol>
          { this.renderTodos() }
        </ol>
      </div>
    );
  }
}

export default TodoContainer;
