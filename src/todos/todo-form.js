import React from 'react';
import {Consumer} from '../app-state/';
import './todo-form.css';

const TodoForm = ({ id = 'new', description, done, deleted, onCancel }) => (
    <div className="post">
      <Consumer selector={state => state.todos[id] || {}}>
        {(todo, mutate) => (
          <div id={`todo-${id}-form`}>
            <div>
              <label><input type="checkbox" name={`todo-${id}-done`} checked={done} /> done?</label>
            </div>
            <div>
              <label htmlFor={`todo-${id}-description`}>Description:</label>
              <textarea name={`todo-${id}-description`} value={description} />
            </div>
            <div>
              <label><input type="checkbox" name={`todo-${id}-deleted`} checked={deleted} /> deleted?</label>
            </div>
            <div>
              <button
                onClick={() =>
                  // Here's the magic:
                  mutate(draft => {
                      let newId;
                      if (id === 'new') {
                          newId = Math.max(
                            Number(
                              Object.keys(draft.todos)
                                .map(key => draft.todos[key])
                                .map(todo => todo.id)
                            )
                          ) + 1;
                      } else {
                          newId = id
                      }
                      draft.todos[newId] = {
                          id: newId,
                          description,
                          done,
                          deleted
                      }
                  })
                }
              >
                Praise Dan <span role="img" aria-label="dan's plan">🙏</span>
              </button>
              {id !== 'new' && <span className="cancel" role="img" aria-label="cancel" onClick={onCancel}>❎</span>}
            </div>
          </div>
        )}
      </Consumer>
    </div>
  );

  export default TodoForm;