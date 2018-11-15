import React, { Component } from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchTodoList,deleteTodo,updateTodo} from '../actions'
import TodoItem from './todoitem';
import AddTodo from './addtodo';

class TodoList extends Component {
  
  componentDidMount(){
      this.props.fetchTodoList();
  }
  renderTodoList(){
    return _.map(this.props.todos, todo => {
      return (
        <TodoItem 
        item={todo} 
        key={todo.id} 
        onDelete={(id)=> this.props.deleteTodo(id)}
        onComplete={(id)=> this.props.updateTodo(id)}
        />
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
      <div className="todo-container">
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
export default connect(mapStateToProps,{fetchTodoList,deleteTodo,updateTodo})(TodoList);
