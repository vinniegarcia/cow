import React from 'react';
import { Consumer } from '../app-state/';
import Todo from './todo';
import TodoForm from './todo-form';

const selector = state => Object.keys(state.todos).map(key => state.todos[key])

const Todos = () => (
    <Consumer selector={selector}>
        {
            (todos, mutate) => {
                const onDone = todo => e => mutate(draft => {
                    draft.todos[todo.id].done = e.target.checked;
                });
                const onEdit = todo => e => mutate(draft => {
                    draft.todos[todo.id].isEditing = true;
                });
                const onCancel = todo => e => mutate(draft => {
                    draft.todos[todo.id].isEditing = false;
                });
                return (
                    <div className="todo-items-container">
                        {todos.filter(todo => !todo.deleted).map(todo => {
                            return todo.isEditing ? 
                                <TodoForm {...todo} onCancel={onCancel(todo)} /> : 
                                <Todo todo={todo} onDone={onDone(todo)} onEdit={onEdit(todo)} />
                        })}
                    </div>
                )
            }
        }
    </Consumer>
);

export default Todos;