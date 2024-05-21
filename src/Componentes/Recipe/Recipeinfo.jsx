import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Recipeinfo.css'

let vId = ''
const Recipeinfo = () => {
  const [item, setItem] = useState(null)
  const { MealId } = useParams()

  useEffect(() => {
    if (MealId !== '') {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res => res.json())
        .then(data => {
          setItem(data.meals[0])
        })
    }
  }, [MealId])

  if (item) {
    const url = item.strYoutube
    const str = url.split('=')
    vId = str[str.length - 1]
  }

  const renderIngredients = () => {
    return Object.keys(item)
      .filter(key => key.startsWith('strIngredient') && item[key])
      .map((key, index) => {
        const ingredient = item[key]
        const measureKey = `strMeasure${index + 1}`
        const measure = item[measureKey]
        return <li key={key}>{ingredient}: {measure}</li>
      })
  }

  return (
    <>
      {(!item)
        ? ''
        : (
          <>
            <div className='header' style={{ backgroundImage: `url(${item.strMealThumb})` }}>
              <div>
                <h1>{item.strMeal}</h1>
                <h3>Category: {item.strCategory}</h3>
              </div>
            </div>
            <div className='content'>
              <div className='recipe-details'>
                <div className='table'>
                  <div className='ingredients'>
                    <h2>INGREDIENTS</h2><br />
                    {renderIngredients()}
                  </div>
                  <div className='instructions'>
                    <h2>INSTRUCTIONS</h2><br />
                    <p>{item.strInstructions}</p>
                  </div>
                </div>
                <div className='video'>
                  <iframe src={`https://www.youtube.com/embed/${vId}`} />
                </div>
              </div>
            </div>
          </>
          )}
    </>
  )
}

export default Recipeinfo
