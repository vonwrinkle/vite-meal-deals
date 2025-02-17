import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import MealSelect from './components/MealSelect'
import SubmitModal from './components/SubmitModal'
import Header from './components/Header'

function App() {

  const [savedMeals, setSavedMeals] = useState([
    {
      mealTitle: 'Classic Spaghetti and Meatballs',
      ingredients: ['spaghetti noodles', 'ground beef', 'tomato sauce', 'parmesan cheese', 'garlic', 'onion']
    },
    {
      mealTitle: 'Chicken Stir-Fry',
      ingredients: ['chicken breast', 'broccoli', 'carrots', 'soy sauce', 'rice', 'ginger', 'garlic']
    },
    {
      mealTitle: 'Avocado Toast',
      ingredients: ['avocado', 'toast bread', 'salt', 'pepper', 'red pepper flakes', 'lemon juice']
    },
    {
      mealTitle: 'Chocolate Chip Cookies',
      ingredients: ['flour', 'sugar', 'brown sugar', 'butter', 'eggs', 'vanilla extract', 'chocolate chips']
    },
    {
      mealTitle: 'Grilled Cheese Sandwich',
      ingredients: ['bread', 'butter', 'cheese']
    }
  ])

  const [showResults, setShowResults] = useState(false)

  function handleAddMeal(meal) {
    setSavedMeals(prevMeals => [...prevMeals, meal])
  }

  function toggleShowResults() {
    setShowResults(prevShowResults => !prevShowResults)
  }

  console.log(savedMeals)

  return (
    <>
      <Header />
      <div className='app'>
        <MealSelect savedMeals={savedMeals} />
        <Form submit={handleAddMeal} toggleShowResults={toggleShowResults} />
        <SubmitModal showResults={showResults} toggleShowResults={toggleShowResults} savedMeals={savedMeals} />
      </div>
    </>
  )
}

export default App
