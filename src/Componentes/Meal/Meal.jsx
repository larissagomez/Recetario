import { React, useEffect, useState } from 'react'
import MealItem from './MealItem'
import RecipeIndex from '../Recipe/RecipeIndex'
import notFoundImage from '../Meal/notFoundImage.png'

const Meal = () => {
  const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a') // Link: List all meals by firs letter //se agregó https:/
  const [item, setItem] = useState()
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setItem(data.meals)
      setShow(true)
    })
  }, [url])

  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }
  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }

  return (
    <>
      <div className='main'>
        <div className='heading'>
          <h1>COOKING RECIPES</h1>
          <h3>FIND THE BEST RECIPES!</h3>
          <div className='searchBox'>
            <input type='search' className='search-bar' placeholder='Search by name' onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
          </div>
          <div className='indexContainer'>
            <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
          </div>
        </div>
        <div className='container'>

          {
            show ? <MealItem data={item} /> : <img src={notFoundImage} alt='Not Found' style={{ width: '200px', height: '200px' }} />
          }
        </div>

      </div>
    </>
  )
}
export default Meal
