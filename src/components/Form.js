import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super()
      this.state = {
        todoField: '' 

      }
    }

  onChange = (e) => {
    console.log(this.state.todoField);
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="form-container">
        <form onSubmit={(e) => this.props.onSubmit(e, this.state.todoField)}>
          <input type="text" name="todoField" value={this.state.todoField} onChange={this.onChange} />
          <button type="submit" >Add Todo</button>
        </form>
      </div>
    );
  }
}

export default Form;
