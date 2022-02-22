import React from 'react'
import { FoodList } from './FoodList';
import {useApiCall} from '../customHooks/useApiCall'


//api 1 =>>> 'https://api.spoonacular.com/recipes/complexSearch?&apiKey=99e23a28d32b4bc0bf4f1db6d7e5693a'
//datos de arriba => nombre, imagen, (calorias, proteinas, carbs), eliminar o agregar 

//obtener precio. para el detalle o agregar al menu
//api 2 =>>> `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`


  // apikey 1 = 99e23a28d32b4bc0bf4f1db6d7e5693a
  // apiKey 2 = 5ec1b4b811504fbfbef0a567e9059c05
  // apikey 3 = 47ed6fdb2c484437b2cf702aa799276e

export const Home = () => {
  
    const foods = useApiCall('https://rickandmortyapi.com/api/character');
  
    return (
      <>
        <h1 className='text-center'>AlkemyChallenge</h1>
        <hr />
        <FoodList foods={foods}/>
      </>
    )
}
