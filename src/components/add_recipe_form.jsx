import React, { Component } from 'react';

class AddRecipeForm extends Component {
  static CancelAddRecipe(id) {
    document.getElementById(id).classList.add('hidden');
  }

  constructor(props) {
    super(props);

    this.state = { recipe: '', ingredients: '' };

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
    this.props.AddNewRecipe(recipe, ingredients);
    document.getElementById('add-recipe-dialog').classList.add('hidden');
    event.preventDefault();
  }

  render() {
    return (
      <div id="add-recipe-dialog" className="dialog hidden" >
        <div className="form-wrapper">
          <form onSubmit={this.HandleRecipeSubmit} className="add-form">
            <label htmlFor="recipe-name">Recipe Name: </label>
            <input type="text" name="recipe-name" id="recipe-to-add" onChange={this.HandleRecipeChange} value={this.state.recipe} />
            <br />
            <label htmlFor="ingredients">Ingredients: </label>
            <input type="text" name="ingredients" id="ingredients-to-add" placeholder="Seperate,ingredients,with,commas" onChange={this.HandleIngredientsChange} />
            <br />
            <input
              type="submit"
              value="Submit"
            />
            <button type="button" onClick={() => this.CancelAddRecipe('add-recipe-dialog')}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

AddRecipeForm.propTypes = {
  AddNewRecipe: React.PropTypes.func.isRequired
};

export default AddRecipeForm;
