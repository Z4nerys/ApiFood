import React, { useState } from 'react'
import { FoodList } from './FoodList';
import { useApiCall } from '../customHooks/useApiCall'
import { Navbar } from '../navegacion/Navbar';
import { Item } from '../cart/Item';

//api 1 =>>> 'https://api.spoonacular.com/recipes/complexSearch?&apiKey=99e23a28d32b4bc0bf4f1db6d7e5693a'
//datos de arriba => nombre, imagen, (calorias, proteinas, carbs), eliminar o agregar 

//obtener precio. para el detalle o agregar al menu
//api 2 =>>> `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`


// apikey 1 = 99e23a28d32b4bc0bf4f1db6d7e5693a
// apiKey 2 = 5ec1b4b811504fbfbef0a567e9059c05
// apikey 3 = 47ed6fdb2c484437b2cf702aa799276e

export const Home = () => {

  const foods = useApiCall('https://rickandmortyapi.com/api/character');
  const [listCart, setListCart] = useState([])


  const add = (id) => {
    const newItem = foods.find(food => food.id === id)
    const exits = listCart.find(item => item.id === newItem.id)
    exits ? alert('ese item ya fue agregado') : setListCart([...listCart, newItem])
  }

  const remove = (id) => {
    const deleteItem = listCart.filter(food => food.id !== id)
    setListCart(deleteItem)

  }

  const reset = () => {
    setListCart([])
  }


  return (
    <>
      <Navbar />
      <h1 className='text-center'>AlkemyChallenge</h1>
      <hr />
      <FoodList
        foods={foods}
        add={add}
      />
      <div className='container'>
        <h4 className='text-center'>Cart</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">img</th>
              <th scope="col">gender</th>
            </tr>
          </thead>
          <tbody>
            {
              listCart.map((item) => {
                console.log(item)
                return <Item
                  key={item.id}
                  {...item}
                  remove={remove}
                />
              })
            }
          </tbody>
        </table>
        <div>
          <button className='btn btn-secondary' onClick={reset}>clear cart</button>
        </div>
      </div>
    </>
  )
}
