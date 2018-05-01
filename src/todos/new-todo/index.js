import React from 'react';
import { Consumer } from '../../app-state/';
import TodoForm from '../form/';
import { FadeIn } from '../animation/faders';
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
                    return (
                        <FadeIn>
                        {
                            ({opacity}) => (
                                <div style={{opacity, height: '200px'}}>
                                    <button onClick={openNewForm}>+ Add Todo</button>
                                </div>
                            )
                        }
                        </FadeIn>
                    )
                }
                return (
                    <FadeIn>
                    {
                        ({opacity}) => (
                            <div id="new-todo-container" style={{opacity}}>
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
                    </FadeIn>
                )
            
            }
        }
    </Consumer>
);

export default NewTodo;