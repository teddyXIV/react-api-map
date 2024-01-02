import { useEffect, useState } from "react"

const Body = () => {
    const [recipe, setRecipe] = useState([])
    const [ingredient, setIngredient] = useState("chicken_breast")
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/${import.meta.env.VITE_API_KEY}/filter.php?i=${ingredient}`)
            .then(response => response.json())
            .then((jsonifiedResponse) => {
                setRecipe(jsonifiedResponse.meals)
                setIsLoaded(true)
                console.log(recipe)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            });
    }, [])

    if (!isLoaded) {
        return <h1>...Loading...</h1>;
    } else {
        return (
            <div>
                {recipe.map((meal) => (
                    <p key={meal.idMeal}>{meal.strMeal}</p>
                ))}
            </div>
        )
    }
}
export default Body;