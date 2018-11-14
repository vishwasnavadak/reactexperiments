import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      item:""
    };
    this.sendValue=this.sendValue.bind(this);
  }
  sendValue(e){
    e.preventDefault();
    this.props.addTodo(this.state.item); 
  }
  render() {
    return (
      <div>
        <form onSubmit={this.sendValue}>
        <input type="text" name="item" placeholder="Add Task" value={this.state.item} onChange={e => this.setState({item:e.target.value})}/>
        <button className="btn" type="submit">Add</button> 
        </form>
      </div>
    )
  }
}

export default connect(null,{addTodo})(AddTodo);