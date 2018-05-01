import { Consumer, createMutator } from '../app-state/';
import { defaultTodo } from './data';

export const onDone = todo => createMutator((draft, e) => {
    draft.todos[todo.id].isDone = e.target.checked;
});

export const onEdit = todo => createMutator((draft, e) => {
    draft.todos[todo.id].isEditing = true;
    draft.editingTodo = draft.todos[todo.id];
});

export const onCancel = todo => createMutator((draft, e) => {
    draft.todos[todo.id].isEditing = false;
    draft.editingTodo = defaultTodo;
});

export const onSave = todo => createMutator((draft, e) => {
    draft.todos[todo.id] = Object.assign({}, draft.editingTodo, { id: todo.id });
    draft.editingTodo = defaultTodo;
});

export const onChange = attr => createMutator((draft, e) => {
    let attributeValue = e.target.value;
    if (e.target.type === 'checkbox') {
        attributeValue = !!e.target.checked;
    }
    draft.editingTodo[attr] = attributeValue;
});