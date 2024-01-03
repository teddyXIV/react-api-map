import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ingredient: ""
}

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        changeIngredient: (state, action) => {
            state.ingredient = action.payload
        }
    }
})

export default ingredientSlice.reducer;

export const { changeIngredient } = ingredientSlice.actions;

export const selectIngredient = (state) => state.ingredient.ingredient;