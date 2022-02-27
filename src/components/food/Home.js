import React, { useState } from 'react'
import { FoodList } from './FoodList';
import { useApiCall } from '../customHooks/useApiCall'
import { Navbar } from '../navegacion/Navbar';
import { Item } from '../cart/Item';
import axios from 'axios';

//api 1 =>>> 'https://api.spoonacular.com/recipes/complexSearch?&apiKey=99e23a28d32b4bc0bf4f1db6d7e5693a'

//api 2 =>>> `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=$99e23a28d32b4bc0bf4f1db6d7e5693a`

// apikey 1 = 99e23a28d32b4bc0bf4f1db6d7e5693a
// apiKey 2 = 5ec1b4b811504fbfbef0a567e9059c05
// apikey 3 = 47ed6fdb2c484437b2cf702aa799276e

export const Home = () => {
  //constantes
  const apikey = '47ed6fdb2c484437b2cf702aa799276e'
  //estados
  const [cantVegan, setCantVegan] = useState([]);
  const [cantNoVegan, setCantNoVegan] = useState([]);

  const [price, setPrice] = useState(0);

  //==================estados de promedio de preparacion==================
  const [cantMenu, setCantMenu] = useState(0);
  const [tiempoPreparacion, setTiempoPreparacion] = useState(0)

  //==================estados de promedio de healthScore
  const [healthScore, setHealthScore] = useState(0)

  //==================funciones==================
  const foods = useApiCall(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apikey}`);

  const api = (id) => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?&apiKey=${apikey}`)
      .then(response => {
        if (response.data.vegan) {
          if (cantVegan.length >= 2) {
            alert("ya no se pueden agregar mas platos veganos")
          } else {
            setCantVegan([...cantVegan, response.data])
            setTiempoPreparacion(tiempoPreparacion + response.data.readyInMinutes)
            setCantMenu(cantMenu + 1)
            setHealthScore(healthScore + response.data.healthScore)
            setPrice(price + response.data.pricePerServing)
          }
        } else { 
          if (cantNoVegan.length >= 2) {
            alert("ya no se pueden agregar mas platos no veganos")
          } else {
            setCantNoVegan([...cantNoVegan, response.data])
            setTiempoPreparacion(tiempoPreparacion + response.data.readyInMinutes)
            setCantMenu(cantMenu + 1)
            setHealthScore(healthScore + response.data.healthScore)
            setPrice(price + response.data.pricePerServing)
          }
        }
      }).catch(e => console.log(e))
  }

  const add = (id) => {
      api(id)
  }

  const remove = (id, pricePerServing, readyInMinutes, healthScoreItem) => {
    setCantVegan(cantVegan.filter((veg) => veg.id !== id))
    setCantNoVegan(cantNoVegan.filter((noVeg) => noVeg.id !== id))
    setPrice(price - pricePerServing)
    setTiempoPreparacion(tiempoPreparacion - readyInMinutes)
    setHealthScore(healthScore - healthScoreItem)
    setCantMenu(cantMenu - 1)
  }

  const reset = () => {
    setPrice(0)
    setCantMenu(0)
    setTiempoPreparacion(0)
    setCantNoVegan([])
    setCantVegan([])
    setHealthScore(0)
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
              <th scope="col">Name</th>
              <th scope="col">Img</th>
              <th scope="col">Price</th>
              <th scope="col">Minutes</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cantVegan.map((item) => {
                return <Item
                  key={item.id}
                  {...item}
                  remove={remove}
                />
              })
            }
            {
              cantNoVegan.map((item) => {
                return <Item
                  key={item.id}
                  {...item}
                  remove={remove}
                />
              })
            }
          </tbody>
        </table>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Final Price</th>
              <th scope="col">Ready in total</th>
              <th scope="col">Health Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$ {price.toFixed(2)}</td>
              <td>{cantMenu === 0 ? 0 : (tiempoPreparacion / cantMenu).toFixed(2)} minutes</td>
              <td>{cantMenu === 0 ? 0 : (healthScore / cantMenu).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
