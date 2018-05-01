import React from 'react';
import './todo-form.css';

const TodoForm = ({ todo, onChange, onSave, onCancel, children }) => (
  <form className="post">
    {children}
    <div id={`todo-${todo.id}-form`}>
      <div>
        <label>
          <input 
            type="checkbox"
            name={`todo-${todo.id}-done`}
            defaultChecked={todo.isDone}
            onChange={onChange('isDone')}
          /> done?
        </label>
      </div>
      <div>
        <label htmlFor={`todo-${todo.id}-description`}>Description:</label>
        <textarea 
          name={`todo-${todo.id}-description`} 
          defaultValue={todo.description}
          onChange={onChange('description')} 
        />
      </div>
      <div>
        <label>
          <input 
            type="checkbox" 
            name={`todo-${todo.id}-deleted`} 
            defaultChecked={todo.isDeleted} 
            onChange={onChange('isDeleted')} 
          /> deleted?
        </label>
      </div>
      <div>
        <button onClick={onSave} type="submit" disabled={!todo.description || todo.description.trim() === ''}>
          Praise Dan <span role="img" aria-label="dan's plan">🙏</span>
        </button>
        <span 
          className="cancel" 
          role="img" 
          aria-label="cancel" 
          onClick={onCancel}>❎</span>
      </div>
    </div>
  </form>
);

  export default TodoForm;