import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recipes: [],
    savedRecipes: []
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        getRecipes: (state, action) => {
            state.recipes = action.payload
        },
        saveRecipe: (state, action) => {
            state.savedRecipes.push(action.payload)
        }
    }
})

export default recipesSlice.reducer;

export const { getRecipes, saveRecipe } = recipesSlice.actions;

export const selectRecipes = (state) => state.recipes;