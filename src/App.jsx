import React, { Component } from 'react';
import RecipeList from './components/recipe_list';
import AddRecipeForm from './components/add_recipe_form';
import './App.css';

class App extends Component {
  static displayAddRecipeDialog(id) {
    if (document.getElementById(id).classList.contains('hidden')) {
      document.getElementById(id).classList.remove('hidden');
    } else {
      document.getElementById(id).classList.add('hidden');
    }
  }

  constructor(props) {
    super(props);

    const getInitialRecipes = () => {
      let initialRecipes = '';
      if (localStorage.recipes) {
        initialRecipes = JSON.parse(localStorage.recipes);
      } else {
        initialRecipes = { Bread: ['Water', 'Flour'], 'Corn Bread': ['Cornmeal', 'Water'] };
      }
      return initialRecipes;
    };

    const initialRecipes = getInitialRecipes();

    this.state = initialRecipes;

    this.HandleAddRecipe = this.HandleAddRecipe.bind(this);
    this.HandleEditRecipe = this.HandleEditRecipe.bind(this);
    this.HandleDeleteRecipe = this.HandleDeleteRecipe.bind(this);
  }

  HandleAddRecipe(recipe, ingredients) {
    const stateHolder = this.state;
    const ingredientsArr = ingredients.replace(/ /g, '').split(',');
    stateHolder[recipe] = ingredientsArr;
    this.setState(stateHolder);
    localStorage.recipes = JSON.stringify(stateHolder);
  }

  HandleEditRecipe(oldRecipeName, newRecipeName, ingredients) {
    const stateHolder = this.state;
    if (oldRecipeName === newRecipeName) {
      stateHolder[newRecipeName] = ingredients.split(',');
      this.setState(stateHolder);
      localStorage.recipes = JSON.stringify(stateHolder);
    } else {
      stateHolder[newRecipeName] = stateHolder[oldRecipeName];
      delete stateHolder[oldRecipeName];
      stateHolder[newRecipeName] = ingredients.split(',');
      this.setState(stateHolder);
      localStorage.recipes = JSON.stringify(stateHolder);
    }
  }

  HandleDeleteRecipe(recipe) {
    const deleteRecipe = confirm('Are you sure you want to delete this recipe?');
    const stateHolder = this.state;
    if (deleteRecipe === true) {
      delete stateHolder[recipe];
      this.setState(stateHolder);
      localStorage.recipes = JSON.stringify(stateHolder);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Recipe Box</h2>
        </div>
        <RecipeList
          recipes={this.state}
          EditRecipe={this.HandleEditRecipe}
          DeleteRecipe={this.HandleDeleteRecipe}
        />
        <button onClick={() => this.displayAddRecipeDialog('add-recipe-dialog')} className="add-btn">Add Recipe</button>
        <AddRecipeForm AddNewRecipe={this.HandleAddRecipe} />
      </div>
    );
  }
}

export default App;
