import React, { Component } from 'react';
import RecipeListItem from './recipe_list_item';

class RecipeList extends Component {
	constructor(props) {
		super(props);

		this.state = {"Bread": ["Water", "Flour"]};
		this.getRecipes();
	}

	getRecipes() {
		this.setState({
			"Tarka Dal": 
				["Chana Dal", 
				"Vegetable Oil", 
				"Cumin Seeds", 
				"Onion", 
				"Green Chillies", 
				"Ginger", 
				"Garlic", 
				"Tomatoes", 
				"Tumeric", 
				"Garam Masala", 
				"Ground Coriander", 
				"Black Pepper",
				"Fresh Coriander"], 
			"Cup o' Tea": 
				["Teabag", 
				"Hot Water", 
				"Milk (Optional)",
				"Sugar (Optional)"]
			});
	}

	render() {
		return (
			<div className='recipe-list'>
				<h1>asdf</h1>
				<RecipeListItem recipes={this.state} />
			</div>
		)
	} 
}

export default RecipeList;