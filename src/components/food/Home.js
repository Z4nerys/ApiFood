import React, {useMemo, useState } from 'react'
import { FoodList } from './FoodList';
import axios from 'axios';
import { Navbar } from '../navegacion/Navbar';

export const Home = () => {
    const [foods, setFoods] = useState([]);
    //====================================esto de aca es la api de spoonacular ===========================
  
    //const apiKey = '99e23a28d32b4bc0bf4f1db6d7e5693a';
    //const url = `https://api.spoonacular.com/recipes/search?&apiKey=${apiKey}`;
  
    //====================================esto de aca es la api de spoonacular ===========================
    // backticks = ``
    //'https://api.spoonacular.com/recipes/search?&apiKey=99e23a28d32b4bc0bf4f1db6d7e5693a';
  
    const apiCall = (url) => {
      axios.get(url)
      .then(response =>{
        console.log(response.data.results)
        setFoods(response.data.results)
      }).catch()
    }

    useMemo(() => apiCall('https://rickandmortyapi.com/api/character'),[])
  
    //reemplazar aca x el de la comida.
    /* useEffect(() => {
      apiCall('https://rickandmortyapi.com/api/character');
    },[]);  */
  
    return (
      <>
        <Navbar />
        <h1 className='text-center'>AlkemyChallenge</h1>
        <hr />
        <FoodList foods={foods}/>
      </>
    )
}
