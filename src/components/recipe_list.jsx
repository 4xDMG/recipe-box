import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {
  console.log(props);
  const recipeArr = Object.keys(props.recipes);
  const recipeKeys = recipeArr.map(recipe => <RecipeListItem
    recipe={recipe}
    key={recipe.id}
    ingredients={props.recipes[recipe]}
    EditRecipe={props.EditRecipe}
    DeleteRecipe={props.DeleteRecipe}
  />
  );

  return (
    <div className="recipe-list">
      {recipeKeys}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: React.PropTypes.shape.isRequired,
  DeleteRecipe: React.PropTypes.func.isRequired
};

export default RecipeList;
