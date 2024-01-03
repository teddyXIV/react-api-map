import { useEffect, useState } from "react"
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredient, changeIngredient } from "../redux/ingredientSlice";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Body = () => {
    const [recipe, setRecipe] = useState([])
    // const [ingredient, setIngredient] = useState("")
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [savedRecipes, setSavedRecipes] = useState([])

    const ingredient = useSelector(selectIngredient)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_API_KEY}/filter.php?i=${ingredient}`)
            .then(response => response.json())
            .then((jsonifiedResponse) => {
                setRecipe(jsonifiedResponse.meals)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            });
    }, [ingredient])

    if (!isLoaded) {
        return <h1>...Loading...</h1>;
    } else if (recipe && ingredient) {
        return (
            <>
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <label>What do you got? </label>
                    <input
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                        value={ingredient}
                        onChange={e => {
                            dispatch(changeIngredient(e.target.value))
                        }} />
                </form>
                <div>
                    < hr />
                    {recipe.map((meal) => (
                        <>
                            <div key={meal.idMeal}>
                                <h4>{meal.strMeal}</h4>
                                <button onClick={() => setSavedRecipes(savedRecipes => [...savedRecipes, meal.strMeal])}>Save recipe</button>
                                < hr />
                            </div>
                        </>
                    ))}
                </div>
                <div>
                    {savedRecipes.map((meal) => (
                        <p key={meal + "1"}>{meal}</p>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            <>
                <form>
                    <label>Ingredient: </label>
                    <input
                        type="text"
                        id="ingredient"
                        value={ingredient}
                        onChange={e => {
                            dispatch(changeIngredient(e.target.value))
                        }} />
                </form>
                <div>
                    {savedRecipes.map((meal) => (
                        <p key={meal + "1"}>{meal}</p>
                    ))}
                </div>
            </>
        )
    }
}
export default Body;