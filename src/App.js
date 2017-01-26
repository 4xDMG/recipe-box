import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/recipe_list';
import AddRecipeForm from './components/add_recipe_form';

class App extends Component {
  constructor(props) {
    super(props);

    const getInitialRecipes = () => {
      if (localStorage["recipes"]) {
        return JSON.parse(localStorage["recipes"]);
      } else {
        return {"Bread": ["Water", "Flour"], "Corn Bread": ["Cornmeal", "Water"]};
      }
    }

    const initialRecipes = getInitialRecipes();
    console.log(localStorage["recipes"]);

    this.state = initialRecipes;

    this.HandleAddRecipe = this.HandleAddRecipe.bind(this);
    this.HandleEditRecipe = this.HandleEditRecipe.bind(this);
    this.HandleDeleteRecipe = this.HandleDeleteRecipe.bind(this);
  }

  getRecipes() {
    
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
    
  }

  HandleAddRecipe(recipe, ingredients) {
    let stateHolder = this.state;
    const ingredientsArr = ingredients.replace(/ /g,"").split(",");
    stateHolder[recipe] = ingredientsArr;
    this.setState(stateHolder);
    localStorage["recipes"] = JSON.stringify(stateHolder);
  }

  HandleEditRecipe(oldRecipeName, newRecipeName, ingredients) {
    let stateHolder = this.state;
    console.log(oldRecipeName + ' ' + newRecipeName);
    if (oldRecipeName === newRecipeName) {
      stateHolder[newRecipeName] = ingredients.split(",");
      this.setState(stateHolder);
      localStorage["recipes"] = JSON.stringify(stateHolder);
    } else {
      stateHolder[newRecipeName] = stateHolder[oldRecipeName];
      delete stateHolder[oldRecipeName];
      stateHolder[newRecipeName] = ingredients.split(",");
      this.setState(stateHolder);
      localStorage["recipes"] = JSON.stringify(stateHolder);
    }
  }

  HandleDeleteRecipe(recipe) {
    let deleteRecipe = confirm("Are you sure you want to delete this recipe?");
    let stateHolder = this.state;
    if (deleteRecipe === true) {
      delete stateHolder[recipe];
      this.setState(stateHolder);
      localStorage["recipes"] = JSON.stringify(stateHolder);
    }
  }

  displayAddRecipeDialog(id) {
    if (document.getElementById(id).classList.contains("hidden")) {
      document.getElementById(id).classList.remove("hidden");
    } else {
      document.getElementById(id).classList.add("hidden");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Recipe Box</h2>
        </div>
        <RecipeList recipes={this.state} EditRecipe={this.HandleEditRecipe} DeleteRecipe={this.HandleDeleteRecipe} />
        <button onClick={() => this.displayAddRecipeDialog('add-recipe-dialog')}>Add Recipe</button>
        <AddRecipeForm AddNewRecipe={this.HandleAddRecipe} />    
      </div>
    );
  }
}

export default App;
