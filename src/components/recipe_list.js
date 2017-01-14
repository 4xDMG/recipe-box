import React, { Component } from 'react';

class RecipeList extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.getInitialState();
	}

	getInitialState() {
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
				"Fresh Coriander"]
			, 
			"Cup o' Tea": 
				["Teabag", 
				"Hot Water", 
				"Milk (Optional)",
				"Sugar (Optional)"]
			});
		console.log(this.state);
	}

	render() {
		return (
			<div className='recipe-list'>
				<h1>Hey There!</h1>
			</div>
		)
	} 
}

export default RecipeList;