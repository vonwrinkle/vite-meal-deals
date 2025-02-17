import React, { useState } from 'react';



function Form(props) {

    const { submit, toggleShowResults } = props;

    const initInputs = {
        mealTitle: '',
        ingredients: ''
    }

    const [meal, setMeal] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target;
        setMeal(prevMeal => {
            if (name === 'ingredients') {
                return {
                    ...prevMeal,
                    [name]: value.split(',')
                }
            }
            return {
                ...prevMeal,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setMeal(prevMeal => {
            return {
                ...prevMeal,
                ingredients: prevMeal.ingredients.map(ingredient => ingredient.trim())
            }
        })
        submit(meal)
        setMeal(initInputs)
        toggleShowResults()
    }

    console.log(meal)

    return (
        <div className='form-container'>
            <h1>Add Meal</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mealTitle">Meal Name</label>
                <input type="text" name="mealTitle" required onChange={handleChange} value={meal.mealTitle} />
                <label htmlFor="ingredients">Ingredients (separated by commas) </label>
                <textarea type='text' rows={5} name="ingredients" required onChange={handleChange} value={meal.ingredients}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;