import React from 'react'
import { useNavigate } from 'react-router-dom'
import notFoundImage from '../Meal/notFoundImage.png'
const MealItem = ({ data }) => {
  console.log(data)
  const navigate = useNavigate()
  return (
    <>
      {
        (!data)
          ? <img src={notFoundImage} alt='Not Found' style={{ width: '200px', height: '200px' }} />
          : data.map(item => {
            return (
              <div className='card' key={item.idMeal} onClick={() => { navigate(`/${item.idMeal}`) }}>
                <img src={item.strMealThumb} alt='' />
                <h3>{item.strMeal}</h3>
              </div>
            )
          })
      }

    </>
  )
}
export default MealItem
