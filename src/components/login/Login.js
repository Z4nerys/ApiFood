import React from 'react'
import { useNavigate } from 'react-router-dom'
import pokemon from './pokemon.mp3' 

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    new Audio(pokemon).play()
    navigate('/', {
      replace: true
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
