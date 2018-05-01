import React from 'react';
import { Consumer } from '../app-state/';
import Todo from './todo/';
import TodoForm from './form/';
import { onDone, onEdit, onCancel, onSave, onChange, onDelete } from './mutators';

const mapTodos = state => Object.keys(state.todos)
    .map(key => state.todos[key])

const Todos = () => (
    <Consumer selector={mapTodos}>
        {
            (todos, mutate) => {
                return (
                    <div className="todo-items-container">
                        {todos
                            .filter(todo => !todo.isDeleted)
                            .map(todo => {
                                return todo.isEditing ? 
                                    <TodoForm 
                                        key={`todo-${todo.id}`}
                                        todo={todo} 
                                        onSave={onSave(todo)}
                                        onChange={onChange}
                                        onCancel={onCancel(todo)} /> : 
                                    <Todo 
                                        key={`todo-${todo.id}`}
                                        todo={todo} 
                                        onDone={onDone(todo)} 
                                        onEdit={onEdit(todo)}
                                        onDelete={onDelete(todo)} 
                                    />
                            })
                        }
                    </div>
                )
            }
        }
    </Consumer>
);

export default Todos;