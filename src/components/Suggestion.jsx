import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react"

const Suggestion = () => {
    const [error, setError] = useState(null);
    const [counter, setCounter] = useState(10);
    const [randomRecipes, setRandomRecipes] = useState([])
    const [selectedRandom, setSelectedRandom] = useState("")

    useEffect(() => {
        if (counter > 0) {
            fetch(`https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_API_KEY}/random.php`)
                .then(response => response.json())
                .then((jsonifiedResponse) => {
                    setCounter(prevCounter => prevCounter - 1)
                    setRandomRecipes(prevList => [...prevList, ...jsonifiedResponse.meals])
                    console.log(counter)
                    console.log(randomRecipes)
                })
                .catch((error) => {
                    setError(error)
                })
        }
    },)


    return (
        <>
            <h3>Inspiration</h3>
            <List sx={{ width: '100%' }}>
                {randomRecipes.map((meal) => {
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
                            <button onClick={() => { setSelectedRandom(meal.strMeal) }}>View details</button>
                            {selectedRandom === meal.strMeal && (
                                <>
                                    <p key={meal.idMeal + "r"}>{meal.strInstructions}</p>
                                    <button>hide</button>
                                </>
                            )}
                        </React.Fragment>
                    )
                })}

            </List>
        </>
    )
}

export default Suggestion;