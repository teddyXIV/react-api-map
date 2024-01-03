import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredient, changeIngredient } from "../redux/ingredientSlice";

const Form = () => {
    const ingredient = useSelector(selectIngredient)
    const dispatch = useDispatch()

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label>What you got in the fridge? </label>
            <input
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={ingredient}
                onChange={e => {
                    dispatch(changeIngredient(e.target.value))
                }} />
        </form>
    )

}

export default Form;


