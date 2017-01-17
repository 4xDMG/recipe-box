import React, { Component } from 'react';
import IngredientList from "./ingredient_list";

class RecipeListItem extends Component {
	displayIngredients(props) {
		this.props.ingredients.map((ingredient, index) => {
			return (
					<IngredientList ingredient={ingredient} />
			)
		});
	}

	render() {
		return (
			<div>
				<h2>{this.props.recipe}</h2>
				<ul>{this.displayIngredients()}</ul>
			</div>
		)
	}
	
}

export default RecipeListItem;