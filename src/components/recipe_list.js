import React from 'react';
import RecipeListItem from './recipe_list_item';

const RecipeList = (props) => {
  const recipeArr = Object.keys(props.recipes);
  const recipeKeys = recipeArr.map((recipe, index) => {
    index++;
    return (
      <RecipeListItem 
        recipe={recipe}
        key={index}
        ingredients={props.recipes[recipe]}
        EditRecipe={props.EditRecipe}
        DeleteRecipe={props.DeleteRecipe}
      />
    );
  });

  return (
    <div className="recipe-list">
      {recipeKeys}
    </div>
  );
};

export default RecipeList;
