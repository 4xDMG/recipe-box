import React from 'react';

const IngredientList = (props) => {
	console.log(props);
	return (<li>{props.ingredient}</li>)
}

export default IngredientList;