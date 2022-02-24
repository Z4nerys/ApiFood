import React, { useState } from 'react'
import { FoodList } from './FoodList';
import { useApiCall } from '../customHooks/useApiCall'
import { Navbar } from '../navegacion/Navbar';
import { Item } from '../cart/Item';
import axios from 'axios';

//api 1 =>>> 'https://api.spoonacular.com/recipes/complexSearch?&apiKey=99e23a28d32b4bc0bf4f1db6d7e5693a'
//datos de arriba => nombre, imagen, (calorias, proteinas, carbs), eliminar o agregar 

//obtener precio. para el detalle o agregar al menu
//api 2 =>>> `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=$99e23a28d32b4bc0bf4f1db6d7e5693a`


// apikey 1 = 99e23a28d32b4bc0bf4f1db6d7e5693a
// apiKey 2 = 5ec1b4b811504fbfbef0a567e9059c05
// apikey 3 = 47ed6fdb2c484437b2cf702aa799276e

export const Home = () => {

  const apikey= '99e23a28d32b4bc0bf4f1db6d7e5693a'
  const foods = useApiCall(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apikey}`);
  const [listCart, setListCart] = useState([]);


  const add = (id) => {
    if (listCart.length >= 4) {
      alert('ya no se pueden agregar mas platos al menu')
    } else {
      const newItem = foods.find(food => food.id === id)
      const exits = listCart.find(item => item.id === newItem.id)
      exits ? alert('ese item ya fue agregado') : axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${apikey}`)
      .then(response => {
        setListCart([...listCart, response.data])
      }).catch(e => console.log(e))
      //el axios de aca deberia haber llamado a useApiCall pero x alguna razon react me tiraba un problema. y para que funcione en useApiCall tenia que borrar ".results"
      //y decidi hacerlo asi para entregar algo funcional a algo no funcional pero optimizado
    }
  }
  console.log(foods)

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
        remove={remove}
      />
      <div className='container'>
        <h4 className='text-center'>Cart</h4>
        <button className='btn btn-danger' onClick={reset}>clear cart</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">img</th>
              <th scope="col">price</th>
              <th scope="col">readyInMinutes</th>
              <th scope="col">remove</th>
            </tr>
          </thead>
          <tbody>
            {
              listCart.map((item) => {
                return <Item
                  key={item.id}
                  {...item}
                  remove={remove}
                />
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
