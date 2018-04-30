import React from 'react';
import './todo.css';

const Todo = ({todo, onDone, onEdit}) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.done} name={`todo-${todo.id}`} onClick={onDone} />
        {todo.description}
        <span className="editor" role="img" aria-label="edit" onClick={onEdit}>✍️</span>
    </div>
);

export default Todo;