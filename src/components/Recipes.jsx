import { selectRecipes, saveRecipe } from "../redux/recipeSlice";
import { useSelector, useDispatch } from "react-redux";

const Recipes = () => {
    const recipes = useSelector(selectRecipes);
    const recipesList = recipes.recipes;
    const savedList = recipes.savedRecipes;

    const dispatch = useDispatch()
    return (
        <>
            <div>
                < hr />
                {recipesList.map((meal) => (
                    <div key={meal.idMeal}>
                        <h4>{meal.strMeal}</h4>
                        <button onClick={() => { if (!savedList.includes(meal)) { dispatch(saveRecipe(meal)) } }}>Save recipe</button>
                        < hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Recipes;