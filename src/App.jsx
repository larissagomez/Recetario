import React from 'react'
import Meal from './Componentes/Meal/Meal'
import './Componentes/Style.css'
import { Routes, Route } from 'react-router-dom'
import Recipeinfo from './Componentes/Recipe/Recipeinfo'
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path='/:MealId' element={<Recipeinfo />} />
      </Routes>
    </>

  )
}

export default App
