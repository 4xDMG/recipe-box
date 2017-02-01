import React, { Component } from 'react';

class EditRecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { recipe: this.props.recipe, ingredients: this.props.ingredients.join(','), recipeID: this.props.recipe.replace(/ /g, '-') };
    this.HandleRecipeChange = this.HandleRecipeChange.bind(this);
    this.HandleIngredientsChange = this.HandleIngredientsChange.bind(this);
    this.HandleRecipeSubmit = this.HandleRecipeSubmit.bind(this);
  }

  HandleRecipeChange(event) {
    const stateHolder = this.state;
    stateHolder.recipe = event.target.value;
    this.setState(stateHolder);
  }

  HandleIngredientsChange(event) {
    const stateHolder = this.state;
    stateHolder.ingredients = event.target.value;
    this.setState(stateHolder);
  }

  HandleRecipeSubmit(event) {
    const recipe = this.state.recipe;
    const ingredients = this.state.ingredients;
    this.props.EditRecipe(this.props.recipe, recipe, ingredients);
    document.getElementById(`${this.state.recipeID}-edit-recipe-dialog`).classList.add('hidden');
    event.preventDefault();
  }

  CancelEditRecipe(id) {
    document.getElementById(id).classList.add('hidden');
  }

  render() {
    return (
      <div id={`${this.state.recipeID}-edit-recipe-dialog`} className="dialog hidden">
        <div className="form-wrapper">
          <form onSubmit={this.HandleRecipeSubmit} className="edit-form">
            <label htmlFor="recipe-name">Recipe Name: </label>
            <input type="text" name="recipe-name" id={`${this.state.recipeID}to-edit`} onChange={this.HandleRecipeChange} value={this.state.recipe} />
            <br />
            <label htmlFor="ingredients">Ingredients: </label>
            <input type="text" name="ingredients" id={`${this.state.recipeID}-ingredients-to-edit`} onChange={this.HandleIngredientsChange} value={this.state.ingredients} />
            <br />
            <input
              type="submit"
              value="Edit"
            />
            <button type="button" onClick={() => this.CancelEditRecipe(`${this.state.recipeID}-edit-recipe-dialog`)}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

EditRecipeForm.propTypes = {
  recipe: React.PropTypes.string.isRequired,
  ingredients: React.PropTypes.arrOf.isRequired,
  EditRecipe: React.PropTypes.func.isRequired
};

export default EditRecipeForm;
