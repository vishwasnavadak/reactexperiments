import React, { Component } from 'react';
import './index.css';

import PostList from './components/post-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
