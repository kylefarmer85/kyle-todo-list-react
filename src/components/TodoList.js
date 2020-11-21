import React, { Component } from 'react';

class TodoList extends Component {

  render() {
    const { id, title, completed } = this.props
    return (
      <div>
        <li>
            <p>
              <span className={ completed ? 'completed' : null }>
               { title }
              </span>

              { 
              completed ? 
              null :
              <button onClick={() => this.props.markComplete(id)}>Mark Complete</button>
              }
              
               <button onClick={() => this.props.deleteTodo(id)}>X</button>
            </p>
        </li>
      </div>
    );
  }
}

export default TodoList;
