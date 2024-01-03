import { selectRecipes, saveRecipe } from "../redux/recipeSlice";
import { getRecipeInfo } from "../redux/recipeInfoSlice";
import { useSelector, useDispatch } from "react-redux";

const Recipes = () => {
    const recipes = useSelector(selectRecipes);
    const recipesList = recipes.recipes;
    const savedList = recipes.savedRecipes;
    const dispatch = useDispatch()

    const saveAndGetInfo = (meal) => {
        if (!savedList.includes(meal)) {
            dispatch(saveRecipe(meal))
        }

        useEffect(() => {
            fetch(`https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_API_KEY}/lookup.php?i=${meal.idMeal}`)
                .then(response => response.json())
                .then((jsonifiedResponse) => {
                    dispatch(getRecipeInfo(jsonifiedResponse.meals))
                })
                .catch((error) => {
                    setError(error)
                });
        }, [])

    }

    return (
        <>
            <div>
                < hr />
                {recipesList.map((meal) => (
                    <div key={meal.idMeal}>
                        <h4>{meal.strMeal}</h4>
                        <button onClick={() => { saveAndGetInfo(meal) }}>Save recipe</button>
                        < hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Recipes;