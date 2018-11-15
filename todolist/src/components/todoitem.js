import React from 'react';


const TodoItem = ({item,onDelete,onComplete}) => {
  const className=`card todo-item ${item.isCompleted?"completed":""}`;
  return (
    <li className={className}>
        <span className="item-text">{item.desc}</span>
        <span className="item-icon right">
        <i className="material-icons delete" onClick={() => onDelete(item.id)} title="Delete this task">close</i>
        </span>
        <span className="item-icon right">
        <i className="material-icons check" onClick={() => onComplete(item.id)} title="Mark as done">check</i>
        </span>
    </li>
  )
}
export default TodoItem;
