import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/recipe_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Recipe Box</h2>
        </div>
        <RecipeList />
      </div>
    );
  }
}

export default App;
