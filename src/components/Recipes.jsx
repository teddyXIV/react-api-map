import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { selectRecipes, saveRecipe } from "../redux/recipeSlice";
import { useSelector, useDispatch } from "react-redux";
import './Recipes.css';

const Recipes = () => {
    const recipes = useSelector(selectRecipes);
    const recipesList = recipes.recipes;
    const savedList = recipes.savedRecipes;
    const dispatch = useDispatch()

    const saveInfo = (meal) => {
        if (!savedList.includes(meal)) {
            dispatch(saveRecipe(meal))
        }
    }

    return (
        <>
            <div className="recipes-container">
                {recipesList.map((meal) => (
                    <div key={meal.idMeal}>
                        <Card className="recipe-card" sx={{ maxWidth: 200, maxHeight: 200 }} onClick={() => { saveInfo(meal) }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={meal.strMealThumb}
                                    alt={meal.strMeal}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {meal.strMeal}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Recipes;