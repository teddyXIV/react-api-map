import { configureStore } from '@reduxjs/toolkit';
import ingredientSliceReducer from './ingredientSlice';
import recipesSliceReducer from './recipeSlice'

export const store = configureStore({
    reducer: {
        ingredient: ingredientSliceReducer,
        recipes: recipesSliceReducer
    }
})
