import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectRecipes } from "../redux/recipeSlice";

const SavedRecipesList = () => {

    const recipes = useSelector(selectRecipes);
    const savedList = recipes.savedRecipes;

    return (

        <List sx={{ width: '100%', maxWidth: 600 }}>
            {savedList.map((meal) => {
                return (
                    <>
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
                    </>
                )
            })}

        </List>
    );
}

export default SavedRecipesList;