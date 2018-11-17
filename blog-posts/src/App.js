import React, { Component } from 'react';
import './index.css';

import PostList from './components/post-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
        <footer>Fork this at <a href="https://github.com/vishwasnavadak/reactexperiments/" target="_blank" rel="noopener noreferrer">Github/vishwasnavadak/reactexperiments/blog-posts</a></footer>
      </div>
    );
  }
}

export default App;
