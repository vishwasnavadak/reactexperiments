import React from 'react';


const TodoItem = ({item,onDelete,onComplete}) => {
  const className=`card todo-item ${item.isCompleted?"completed":""}`;
  return (
    <li className={className}>
        <span className="item-text">{item.desc}</span>
        <span className="item-icons right">
        <i className="material-icons check" onClick={() => onComplete(item.id)}>check</i>
        <i className="material-icons delete" onClick={() => onDelete(item.id)}>close</i>
        </span>
    </li>
  )
}
export default TodoItem;
