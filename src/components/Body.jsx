import { useEffect, useState } from "react"
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredient } from "../redux/ingredientSlice";
import { selectRecipes, getRecipes } from "../redux/recipeSlice";
import Recipes from "./Recipes";
import Form from "./Form";
import Suggestion from "./Suggestion";
import SavedRecipesList from "./SavedRecipesList";
import './Body.css';

const Body = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const ingredient = useSelector(selectIngredient);
    const recipes = useSelector(selectRecipes);
    const recipesList = recipes.recipes;

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_API_KEY}/filter.php?i=${ingredient}`)
            .then(response => response.json())
            .then((jsonifiedResponse) => {
                dispatch(getRecipes(jsonifiedResponse.meals))
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            });
    }, [ingredient])

    if (!isLoaded) {
        return <h1>...Loading...</h1>;
    } else if (recipesList && ingredient) {
        return (
            <>
                <div className="form">
                    <Form />
                </div>
                <div className="recipe-content">
                    <div className="spacer">
                        <Suggestion />
                    </div>
                    <div className="recipes-container">
                        <Recipes />
                    </div>
                    <div className="saved-container">
                        <SavedRecipesList />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="form">
                    <Form />
                </div>
                <div className="saved-container">
                    <SavedRecipesList />
                </div>
            </>
        )
    }
}
export default Body;