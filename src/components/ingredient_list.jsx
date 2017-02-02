import React from 'react';

function IngredientList(props) {
  return (
    <li>{props.ingredient}</li>
  );
}

IngredientList.propTypes = {
  ingredient: React.PropTypes.string.isRequired
};

export default IngredientList;
