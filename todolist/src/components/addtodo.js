import React, { Component } from 'react'

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" name="add" /><button type="submit">Add</button> 
      </div>
    )
  }
}
