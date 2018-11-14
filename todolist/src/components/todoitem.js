import React from 'react';
// import todo_reducer from '../reducers/todo_reducer';

const TodoItem = ({item}) => {
  return (
    <li className="card todo-item">
    <div>
        <span className="item-text">{item.desc}</span>
        <span className="item-icon right">
        <i className="material-icons">close</i>
        </span>
        <span className="item-icon right">
          <i className="material-icons">check</i>
        </span>
    </div>
    </li>
  )
}
export default TodoItem;
