import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectRecipes } from "../redux/recipeSlice";
import { useState, useEffect } from 'react';

const SavedRecipesList = () => {
    const [selectedRecipe, setSelectedRecipe] = useState("Arrabiata");
    const [recipeInfo, setRecipeInfo] = useState("")
    const [error, setError] = useState(null);
    const recipes = useSelector(selectRecipes);
    const savedList = recipes.savedRecipes;


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_API_KEY}/search.php?s=${selectedRecipe}`)
            .then(response => response.json())
            .then((jsonifiedResponse) => {
                setRecipeInfo(jsonifiedResponse)
            })
            .catch((error) => {
                setError(error)
            });
    }, [selectedRecipe])

    return (

        <List sx={{ width: '100%' }}>
            {savedList.map((meal) => {
                return (
                    <React.Fragment key={meal.idMeal}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={meal.strMeal} src={meal.strMealThumb} />
                            </ListItemAvatar>
                            <hr></hr>
                            <ListItemText
                                primary={meal.strMeal}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <button onClick={() => { setSelectedRecipe(meal.strMeal) }}>View details</button>
                        {selectedRecipe === meal.strMeal && recipeInfo.meals && (
                            <p key={meal.idMeal}>{recipeInfo.meals[0].strInstructions}</p>
                        )}
                    </React.Fragment>
                )
            })}

        </List>
    );
}

export default SavedRecipesList;