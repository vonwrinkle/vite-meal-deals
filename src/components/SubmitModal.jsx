


function SubmitModal(props) {

    const { showResults, toggleShowResults, savedMeals } = props;

    const lastMealSaved = savedMeals[savedMeals.length - 1];

    return (
        <>
            {showResults && savedMeals.length > 0 &&
                <>
                    <div className="overlay"></div>
                    <div className="modal">
                        <h1>Meal Added!</h1>
                        <h2>Meal Name: {lastMealSaved.mealTitle}</h2>
                        <h2>Ingredients: {lastMealSaved.ingredients.join(', ')}</h2>
                        <button onClick={toggleShowResults}>X</button>
                    </div>
                </>
            }
        </>
    )
}

export default SubmitModal;