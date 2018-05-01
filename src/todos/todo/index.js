import React from 'react';
import { Darken, Lighten } from '../animation/faders';
import './todo.css';

const Todo = ({todo, onDone, onEdit, onDelete}) => (
    <div className="todo-item">
        <input type="checkbox" checked={todo.isDone} name={`todo-${todo.id}`} onChange={onDone} />
        {
            !todo.isDone ? 
            <Darken>
            { 
                ({color}) => <span>{todo.description}</span>
            }</Darken> :
            <Lighten>
            {
                ({color}) => (
                    <span style={{color, textDecoration: 'line-through'}}>{todo.description}</span>
                )
            }
            </Lighten>
        }
        <span className="editor" role="img" aria-label="edit" onClick={onEdit}>✍️</span>
        <span className="del" role="img" aria-label="delete" onClick={onDelete}>❌</span>
    </div>
);

export default Todo;