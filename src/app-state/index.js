import createState from 'react-copy-write';

// Or destructure if you'd like
const State = createState({
  todos: {
    '4': {
        id: 4,
        description: 'Update the app to allow creating new todos',
        done: false,
        deleted: false
    },
    '1': {
        id: 1,
        description: 'deleted todo',
        done: false,
        deleted: true
    }, 
    '2': {
        id: 2,
        description: 'Use create-react-app to set up',
        done: true,
        deleted: false,
        isEditing: true
    }
  }
});

export const Provider = State.Provider;
export const Consumer = State.Consumer;