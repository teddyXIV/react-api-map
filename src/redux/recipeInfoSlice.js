import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recipeInfo: []
}

export const recipeInfoSlice = createSlice({
    name: 'recipeInfo',
    initialState,
    reducers: {
        getRecipeInfo: (state, action) => {
            state.recipeInfo = action.payload
        }
    }
})

export default recipeInfoSlice.reducer;

export const { getRecipeInfo } = recipeInfoSlice.actions;

export const selectRecipeInfo = (state) => state.recipeInfo;