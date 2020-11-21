import React, { Component } from 'react';
import "../App.css"
import Form from './Form'
import TodoContainer from './TodoContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  

  onSubmit = (e, todoField) => {
    e.preventDefault()
    
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}/>
        <TodoContainer />
      </div>
    );
  }
}

export default App;

