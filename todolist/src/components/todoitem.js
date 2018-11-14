import React from 'react'
//TODO adding fontawesome FontAwesome from 'react-fontawesome';
import todo_reducer from '../reducers/todo_reducer';

const TodoItem = ({item}) => {
  return (
    <li className="todo-item">
    <div>
        <span className="icon">Done</span> | 
         {item.desc}    
        | <span className="icon">Delete</span>
    </div>
    </li>
  )
}
export default TodoItem;
