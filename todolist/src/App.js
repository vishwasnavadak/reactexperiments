import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import TodoList from './components/todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoList />
        <footer>Fork this at <a href="https://github.com/vishwasnavadak/reactexperiments/" target="_blank" rel="noopener noreferrer">Github/vishwasnavadak/reactexperiments/todolist</a></footer>
      </div>
    );
  }
}

export default App;
