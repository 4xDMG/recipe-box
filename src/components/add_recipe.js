import React, {Component} from 'react';

class AddRecipe extends Component {
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
				<div id="add-recipe-dialog" className="dialog hidden">
        			<form>
         		 		<label htmlFor="recipe-name">Recipe Name: </label>
          				<input type="text" name="recipe-name" />
          				<br />
          				<label htmlFor="ingredients">Ingredients (Seperated by a comma): </label>
          				<input type="text" name="ingredients" />
          				<br />
          				<input type="submit" value="Submit" />
        			</form>
      			</div>
      		</div>
		)
	}
}

export default AddRecipe;