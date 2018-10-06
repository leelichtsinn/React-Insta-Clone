import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from '../src/components/PostContainer/PostContainer.js';
import SearchBar from '../src/components/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
