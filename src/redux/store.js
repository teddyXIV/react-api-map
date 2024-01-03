import { configureStore } from '@reduxjs/toolkit';
import ingredientSliceReducer from './ingredientSlice';
import recipesSliceReducer from './recipeSlice'
import recipeInfoSliceReducer from './recipeInfoSlice'

export const store = configureStore({
    reducer: {
        ingredient: ingredientSliceReducer,
        recipes: recipesSliceReducer,
        recipeInfo: recipeInfoSliceReducer
    }
})
