import React from 'react';

const IngredientList = (props) => {
  return (
    <li>{props.ingredient}</li>
  );
};

IngredientList.propTypes = {
  ingredient: React.PropTypes.string.isRequired
};

export default IngredientList;
