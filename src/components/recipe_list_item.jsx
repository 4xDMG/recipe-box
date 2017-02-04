import React, { Component } from 'react';
import IngredientList from './ingredient_list';
import EditRecipeForm from './edit_recipe_form';


class RecipeListItem extends Component {
  static displayIngredients(recipeId) {
    if (document.getElementById(recipeId).classList.contains('hidden')) {
      document.getElementById(recipeId).classList.remove('hidden');
    } else {
      document.getElementById(recipeId).classList.add('hidden');
    }
  }

  constructor(props) {
    super(props);

    const recipeId = this.props.recipe.replace(/ /g, '-');
    const ingredientsId = '{ recipeId }-Ingredients';
    this.state = { recipeId, ingredientsId };
    console.log(this.props);
  }

  generateIngredients() {
    return (
      <ul>
        { this.props.ingredients.map(function (ingredient) {
          return <IngredientList ingredient={ingredient} key={this.key} />;
        }
        )}
      </ul>
    );
  }

  displayEditIngredients() {
    this.displayIngredients('{this.state.recipeId}-edit-recipe-dialog');
    let ingredients = JSON.parse(JSON.stringify(this.props.ingredients));
    ingredients = ingredients.join();
    document.getElementById('{this.state.recipeId}-ingredients-to-edit').value = ingredients;
  }

  render() {
    return (
      <div className="recipe-list-item">
        <a
          tabIndex="-1"
          id={this.state.recipeId}
          onClick={() => this.displayIngredients(this.state.ingredientsId)}
        >
          <h2>{this.props.recipe}</h2>
        </a>
        <div id={this.state.ingredientsId} className="recipe-ingredients-item hidden">
          {this.generateIngredients()}
          <button onClick={() => this.displayEditIngredients('{this.state.recipeId}-ingredients-to-edit')} className="edit-btn">Edit</button>
          <button onClick={() => this.props.DeleteRecipe(this.props.recipe)} className="delete-btn">Delete</button>
        </div>
        <EditRecipeForm
          recipe={this.props.recipe}
          ingredients={this.props.ingredients}
          EditRecipe={this.props.EditRecipe}
        />
      </div>
    );
  }

}

RecipeListItem.propTypes = {
  recipe: React.propTypes.string.isRequired,
  ingredients: React.propTypes.arrayOf.isRequired,
  DeleteRecipe: React.propTypes.func.isRequired,
  EditRecipe: React.propTypes.func.isRequired
};

export default RecipeListItem;
