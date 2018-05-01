import React, { Component } from 'react';
import { Provider } from './app-state/';
import Todos from './todos/';
import NewTodo from './todos/new-todo/';
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
            <div id="todos-container">
              <h2>Todos:</h2>
              <Todos />
            </div>
            <NewTodo />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
