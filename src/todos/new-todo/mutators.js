import { createMutator } from '../../app-state/';
import { defaultTodo } from '../data';

export const onCreate = createMutator((draft, e) => {
    const ids = Object.keys(draft.todos)
        .map(key => draft.todos[key])
        .map(todoItem => Number(todoItem.id))
    const newId = Math.max(...ids) + 1;
    draft.todos[newId] = Object.assign({}, draft.pendingTodo, {id: newId});
    draft.pendingTodo = defaultTodo;
    draft.isNewTodoOpen = false;
});

export const onCancel = createMutator((draft, e) => {
    draft.pendingTodo = defaultTodo;
    draft.isNewTodoOpen = false;
});

export const onChange = attr => createMutator((draft, e) => {
    let attributeValue = e.target.value;
    if (e.target.type === 'checkbox') {
        attributeValue = !!e.target.checked;
    }
    draft.pendingTodo[attr] = attributeValue;
    console.log(attr, draft.pendingTodo[attr])
});

export const openNewForm = createMutator((draft, e) => {
    draft.isNewTodoOpen = true;
});