import React, { Component } from 'react';
import { Provider } from './app-state/';
import Todos from './todos/';
import TodoForm from './todos/todo-form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React-Copy-Write todo app</h1>
          </header>
          <main>
            <div id="new-todo-container">
              <h2>New Todo:</h2>
              <TodoForm />
            </div>
            <div id="todos-container">
              <h2>Todos:</h2>
              <Todos />
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
