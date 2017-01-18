import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/recipe_list';
import AddRecipe from './components/add_recipe';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {"Bread": ["Water", "Flour"], "Corn Bread": ["Cornmeal", "Water"]};
  }

  /*getRecipes() {
    
      this.setState({
      "Tarka Dal": 
        ["Chana Dal", 
        "Vegetable Oil", 
        "Cumin Seeds", 
        "Onion", 
        "Green Chillies", 
        "Ginger", 
        "Garlic", 
        "Tomatoes", 
        "Tumeric", 
        "Garam Masala", 
        "Ground Coriander", 
        "Black Pepper",
        "Fresh Coriander"], 
      "Cup o' Tea": 
        ["Teabag", 
        "Hot Water", 
        "Milk (Optional)",
        "Sugar (Optional)"]
      });
      console.log(this.state);
    
  }*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Recipe Box</h2>
        </div>
        <RecipeList recipes={this.state} />
        <AddRecipe />
      </div>
    );
  }
}

export default App;
