import React, { Component } from 'react'


export default class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); //Don't refresh the page on submit
        this.props.addTodo(this.state); //Call addTodo function
        this.setState({
            content: ''
        });
    }

    render() {
      return (
       <div>
        <form onSubmit={this.handleSubmit}> 
            <label>Add a new to-do:</label>
            <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}
