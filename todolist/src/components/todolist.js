import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchTodoList} from '../actions'
class TodoList extends Component {
  componentDidMount(){
      this.props.fetchTodoList();
  }
  render() {
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