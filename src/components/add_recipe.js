import React, {Component} from 'react';
import RecipeForm from './add_recipe_form';

class AddRecipe extends Component {
	constructor(props) {
		super(props);

		console.log(this.props);
	}

	displayRecipeDialog(id) {
		if (document.getElementById(id).classList.contains("hidden")) {
			document.getElementById(id).classList.remove("hidden");
		} else {
			document.getElementById(id).classList.add("hidden");
		}
	}
	
	render() {
		return (
			<div>
				<button onClick={() => this.displayRecipeDialog('add-recipe-dialog')}>Add Recipe</button>
				<RecipeForm AddNewRecipe={this.props.AddNewRecipe}/>
      		</div>
		)
	}
}

export default AddRecipe;