import React from 'react';
import { Consumer, createMutator } from '../../app-state/';
import TodoForm from '../form/';
import { defaultTodo } from '../data';
import { onCreate, onCancel, onChange, openNewForm } from './mutators';

const getNewTodoData = state => ({
    pendingTodo: state.pendingTodo,
    isNewTodoOpen: state.isNewTodoOpen
});

const NewTodo = () => (
    <Consumer selector={getNewTodoData}>
        {
            ({pendingTodo, isNewTodoOpen}) => {
                if (!isNewTodoOpen) {
                    return <button onClick={openNewForm}>+ Add Todo</button>
                }
                return (
                    <div id="new-todo-container">
                        <TodoForm 
                            todo={pendingTodo}
                            onSave={onCreate}
                            onChange={onChange}
                            onCancel={onCancel}>
                            <h2>New Todo</h2>
                        </TodoForm>
                    </div>
                )
            
            }
        }
    </Consumer>
);

export default NewTodo;