import { useState } from "react";


function MealSelect(props) {

    const { savedMeals } = props;

    const [shoppingList, setShoppingList] = useState([])

    function addToList(meal) {
        setShoppingList(prevList => [...prevList, meal])
    }

    function removeFromList(meal) {
        setShoppingList(prevList => prevList.filter(item => item.mealTitle !== meal.mealTitle))
    }

    function getShoppingList() {
        return shoppingList.reduce((acc, meal) => {
            meal.ingredients.forEach(ingredient => {
                const existingIngredient = acc.find(item => item.ingredientName === ingredient);
                if (existingIngredient) {
                    existingIngredient.quantity++;
                } else {
                    acc.push({ ingredientName: ingredient, quantity: 1 });
                }
            });
            return acc;
        }, []).sort((a, b) => a.ingredientName.localeCompare(b.ingredientName));
    }

    return (
        <div className="meal-select">
            {/* <select>
                <option value="" >Select a Meal</option>
            </select> */}
            <div className="meal-section">
                <h1>Meal Options</h1>
                <div className="meal-select-section">
                    {savedMeals.map((meal, i) => {
                        return (
                            <>
                                {!shoppingList.includes(meal) &&
                                    <div className="meal-title" key={i}>
                                        <h3>{meal.mealTitle}</h3>
                                        <button onClick={() => addToList(meal)}>Add to List</button>
                                    </div>}
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="meal-section">
                <h1>Selected Meals</h1>
                <div className="meal-select-section">
                    {shoppingList.map((meal, i) => {
                        return (
                            <div className="meal-title" key={i}>
                                <h3>{meal.mealTitle}</h3>
                                <button onClick={() => removeFromList(meal)}>Remove from List</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="meal-section">
                <h1>Shopping List</h1>
                <div className="meal-select-section">
                    <ul>
                        {getShoppingList().map((item, i) => {
                            return (
                                <li key={i}>{item.ingredientName} x{item.quantity}</li>
                            )
                        })}
                    </ul>
                </div>
                <p className="ingredients-footer">Ingredients Needed x Meals Needed For</p>
            </div>
        </div>
    )
}

export default MealSelect;