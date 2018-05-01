import React from 'react';
import './todo.css';

const Todo = ({todo, onDone, onEdit}) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.isDone} name={`todo-${todo.id}`} onChange={onDone} />
        {todo.description}
        <span className="editor" role="img" aria-label="edit" onClick={onEdit}>✍️</span>
    </div>
);

export default Todo;