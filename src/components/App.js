import React, { Component } from 'react';
import "../App.css"
import Form from './Form'
import TodoContainer from './TodoContainer'

const URL = 'https://jsonplaceholder.typicode.com/todos'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(todos => {
      this.setState({
        todos: todos
      })
    })
  }


  postTodo = (todoField) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        userId: 1,
        title: todoField,
        completed: false
      })
    })
    .then(response => response.json())
    .then(newTodo => {
      this.setState(prevState => {
        return {
          todos: [newTodo, ...prevState.todos]
        }
      })
    })
  }

  deleteTodo = (id) => {
    fetch(URL + `/${id}`, {method: 'DELETE'})
    .then(response => response.json())
    .then()
      const updatedTodos = this.state.todos.filter(todoObj => todoObj.id !== id)
      this.setState({
        todos: updatedTodos
      })
  }

  markComplete = (id) => {
    fetch(URL + `/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: true
      })
    })
    .then(resp => resp.json())
    .then(completedTodo => {
      const updatedTodos = this.state.todos.map(todoObj => {
        if (todoObj.id === completedTodo.id) {
          return {...todoObj, completed: true}
        } else {
          return todoObj
        }
      })   
      this.setState({
        todos: updatedTodos
      })   
    })
  }  
  

  render() {
    return (
      <div>
        <Form postTodo={this.postTodo}/>
        <TodoContainer todos={this.state.todos} deleteTodo={this.deleteTodo} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;

