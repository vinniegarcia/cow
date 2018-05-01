import createState from 'react-copy-write';
import { defaultTodo } from '../todos/data';

// Or destructure if you'd like
const State = createState({
  todos: {
    '4': {
        id: 4,
        description: 'Update the app to allow creating new todos',
        isDone: false,
        isDeleted: false,
        isEditing: false
    },
    '1': {
        id: 1,
        description: 'deleted todo',
        isDone: false,
        isDeleted: true,
        isEditing: false
    }, 
    '2': {
        id: 2,
        description: 'Use create-react-app to set up',
        isDone: true,
        isDeleted: false,
        isEditing: false
    }
  },
  pendingTodo: defaultTodo,
  editingTodo: defaultTodo,
  isNewTodoOpen: false
});

export const Provider = State.Provider;
export const Consumer = State.Consumer;
export const createMutator = State.createMutator;