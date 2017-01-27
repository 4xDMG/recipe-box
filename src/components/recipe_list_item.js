import React, { Component } from 'react';
import IngredientList from "./ingredient_list";
import EditRecipeForm from "./edit_recipe_form";


class RecipeListItem extends Component {
	constructor(props) {
		super(props);

		const recipeId=this.props.recipe.replace(/ /g, "-");
		const ingredientsId=recipeId+"-Ingredients";
		this.state={recipeId, ingredientsId};
	}

	generateIngredients(props) {
		return (			
			<ul>
				{ this.props.ingredients.map((ingredient, index) => {
					return <IngredientList ingredient={ingredient} key={index} />;
				})}
			</ul>
		)
	}

	displayIngredients(id) {
		if (document.getElementById(id).classList.contains("hidden")) {
			document.getElementById(id).classList.remove("hidden");
		} else {
			document.getElementById(id).classList.add("hidden");
		}
	}

	displayEditIngredients(id) {
		this.displayIngredients(this.state.recipeId + "-edit-recipe-dialog");
		let ingredients = JSON.parse(JSON.stringify(this.props.ingredients));
		ingredients = ingredients.join();
		document.getElementById(this.state.recipeId + "-ingredients-to-edit").value = ingredients;
	}

	render() {
		return (
			<div className='recipe-list-item'>
				<h2 id={this.state.recipeId} onClick={() => this.displayIngredients(this.state.ingredientsId)}>{this.props.recipe}</h2>
				<div id={this.state.ingredientsId} className='recipe-ingredients-item hidden'>				
					{this.generateIngredients()}
					<button onClick={() => this.displayEditIngredients(this.state.recipeId + "-ingredients-to-edit")} className='edit-btn'>Edit</button>
					<button onClick={() => this.props.DeleteRecipe(this.props.recipe)} className='delete-btn'>Delete</button>				
				</div>
				<EditRecipeForm recipe={this.props.recipe} ingredients={this.props.ingredients} EditRecipe={this.props.EditRecipe} />
			</div>
		)
	}
	
}

export default RecipeListItem;