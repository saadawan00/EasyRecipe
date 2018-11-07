import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import { combineReducers, createStore } from "react-redux";

const API_KEY = "c546c7a8687090496004cea7e961d167";
class App extends Component {
  state = {
    recipies: []
  };

  getRecipe = e => {
    e.preventDefault();
    const searchKey = e.target.recipe.value;
    // const recipeData;
    // console.log("heyy",e.target.recipe.value);
    axios
      .get(
        `https://www.food2fork.com/api/search?key=${API_KEY}&q=${searchKey}&page=2 `
      )
      .then(res => {
        // console.log("res", res.data.recipes)
        this.setState({
          recipies: res.data
        });
        // console.log("this.state.recipies", this.state.recipies)
        // data = s
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App">
          <p>Easy Recipe</p>
          <Form getRecipe={this.getRecipe} />
          {
            /* {
            this.state.recipies.recipes.map((dish) => {
              return(
              <div >
              {dish.title}              
              </div>
              )
            })
          }  */
            // console.log(this.state.recipies.recipes.map((dish) => {
            //   return(
            //   <div >
            //   {dish.title}
            //   </div>
            //   )
            // }))
          }
        </header>
      </div>
    );
  }
}

export default App;
