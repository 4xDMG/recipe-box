import React, { Component } from 'react';
import IngredientList from "./ingredient_list";
import EditRecipe from "./edit_recipe_item";
import DeleteRecipe from "./delete_recipe_item";

class RecipeListItem extends Component {
	constructor(props) {
		super(props);

		const recipeId=this.props.recipe.replace(" ", "");
		const ingredientsId=recipeId+"Ingedients";
		this.state = {recipeId, ingredientsId};
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

	render() {
		return (
			<div>
				<h2 id={this.state.recipeId} onClick={() => this.displayIngredients(this.state.ingredientsId)}>{this.props.recipe}</h2>
				<span id={this.state.ingredientsId} className='hidden'>
					{this.generateIngredients()}
					<EditRecipe />
					<DeleteRecipe />
				</span>
			</div>
		)
	}
	
}

export default RecipeListItem;