import React, {Component} from 'react';

class AddRecipeForm extends Component {
	constructor(props) {
		super(props);

		this.state = {recipe: '', ingredients: ""};

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
		const ingredients = this.state.ingredients
		this.props.AddNewRecipe(recipe, ingredients);
		document.getElementById("add-recipe-dialog").classList.add("hidden");
		event.preventDefault();
	}

	render() {
		return (
			<div id="add-recipe-dialog" className="dialog hidden" >
        		<form onSubmit={this.HandleRecipeSubmit}>
         			<label htmlFor="recipe-name">Recipe Name: </label>
          			<input type="text" name="recipe-name" id="recipe-to-add" onChange={this.HandleRecipeChange} value={this.state.recipe} />
          			<br />
          			<label htmlFor="ingredients">Ingredients (Seperated by a comma): </label>
          			<input type="text" name="ingredients" id="ingredients-to-add" onChange={this.HandleIngredientsChange} />
          			<br />
          			<input 
          				type="submit" 
          				value="Submit" 
          			/>
        		</form>
      	</div>
      	)
	}
}

export default AddRecipeForm;