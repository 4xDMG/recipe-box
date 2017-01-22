import React, {Component} from 'react';

class EditRecipeForm extends Component {
	constructor(props) {
		super(props);

		this.state = {recipe: this.props.recipe, ingredients: this.props.ingredients, recipeID: this.props.recipe.replace(/ /g, "-")};
		this.HandleRecipeChange = this.HandleRecipeChange.bind(this);
		this.HandleIngredientsChange = this.HandleIngredientsChange.bind(this);
		this.HandleRecipeSubmit = this.HandleRecipeSubmit.bind(this);
	}	 

	/*displayIngredients(id) {

			let ingredients = JSON.parse(JSON.stringify(this.state.ingredients));
			ingredients = ingredients.join();
			console.log(ingredients);
			console.log(document.getElementById(id).value);
			document.getElementById("ingredients-to-add").value = ingredients;

	}*/

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
			<div id="edit-recipe-dialog" className="dialog hidden" >
        		<form onSubmit={this.HandleRecipeSubmit}>
         			<label htmlFor="recipe-name">Recipe Name: </label>
          			<input type="text" name="recipe-name" id={this.state.recipeID + "to-edit"} onChange={this.HandleRecipeChange} value={this.state.recipe} />
          			<br />
          			<label htmlFor="ingredients">Ingredients (Seperated by a comma): </label>
          			<input type="text" name="ingredients" id={this.state.recipeID + "-ingredients-to-edit"} onChange={this.HandleIngredientsChange} value="" />
          			<br />
          			<input 
          				type="submit" 
          				value="Edit" 
          			/>
        		</form>
      	</div>
      	)
	}
}

export default EditRecipeForm;