import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchTodoList} from '../actions'
class TodoList extends Component {
  
  componentWillMount(){
      this.props.fetchTodoList();
  }
  render() {
    if(!this.props.todos){
      return (
        <div>Loading...</div>
      );
    }
    console.log(this.props.todos);
    return (
      <div>
         list
      </div>
    )
  }
}

function mapStateToProps(state){
    return {todos:state.todos};
}
export default connect(mapStateToProps,{fetchTodoList})(TodoList);
