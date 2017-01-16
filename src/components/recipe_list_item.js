import React, { Component } from 'react';

class RecipeListItem extends Component {
	constructor(props) {
		super(props);
	}

	getRecipes(props) {
		const recipeArr = Object.keys(this.props.recipes);
		return recipeArr[0];
	}
	

	render() {
		return (
			<h2>{this.getRecipes()}</h2>
		)
	}
	
}

export default RecipeListItem;