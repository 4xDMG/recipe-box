import React, { Component } from 'react';
import IngredientList from "./ingredient_list";
import EditRecipeForm from "./edit_recipe_form";


class RecipeListItem extends Component {
	constructor(props) {
		super(props);

		const recipeId=this.props.recipe.replace(/ /g, "-");
		const ingredientsId=recipeId+"-Ingredients";
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

	displayEditIngredients(id) {
		let ingredients = JSON.parse(JSON.stringify(this.props.ingredients));
		ingredients = ingredients.join();
		document.getElementById(this.state.recipeId + "-ingredients-to-edit").value = ingredients;
	}

	render() {
		return (
			<div>
				<h2 id={this.state.recipeId} onClick={() => this.displayIngredients(this.state.ingredientsId)}>{this.props.recipe}</h2>
				<span id={this.state.ingredientsId} className='hidden'>
					{this.generateIngredients()}
					<button onClick={() => this.displayEditIngredients(this.state.recipeId + "-ingredients-to-edit")}>Edit</button>
					<button>Delete</button>
				</span>
				<EditRecipeForm recipe={this.props.recipe} ingredients={this.props.ingredients} />
			</div>
		)
	}
	
}

export default RecipeListItem;