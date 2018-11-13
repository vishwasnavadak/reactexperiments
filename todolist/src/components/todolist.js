import React, { Component } from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchTodoList} from '../actions'
import TodoItem from './todoitem';
import AddTodo from './addtodo';

class TodoList extends Component {
  
  componentDidMount(){
      this.props.fetchTodoList();
  }
  renderTodoList(){
    return _.map(this.props.todos, todo => {
      return (
        <TodoItem item={todo} key={todo.id}/>
      );
    })
  }
  render() {
    if(!this.props.todos){
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <AddTodo />
        <ul className="todo-list">
        {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {todos:state.todos};
}
export default connect(mapStateToProps,{fetchTodoList})(TodoList);
