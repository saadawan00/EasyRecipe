import React from 'react';


const Form = props => (
        <form onSubmit = {props.getRecipe}>
            <input placeholder = "enter value" name="recipe"/>
            <button>Submit</button>
        </form> 
);

export default Form;