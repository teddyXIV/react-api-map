import { useEffect, useState } from "react"
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredient } from "../redux/ingredientSlice";
import { selectRecipes, getRecipes } from "../redux/recipeSlice";
import Recipes from "./Recipes";
import Form from "./Form";
import SavedRecipesList from "./SavedRecipesList";

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
                <Form />
                <Recipes />
                <SavedRecipesList />
            </>
        )
    } else {
        return (
            <>
                <Form />
                <SavedRecipesList />
            </>
        )
    }
}
export default Body;