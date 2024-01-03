import { configureStore } from '@reduxjs/toolkit';
import ingredientSliceReducer from './ingredientSlice';


export const store = configureStore({
    reducer: {
        ingredient: ingredientSliceReducer
    }
})
