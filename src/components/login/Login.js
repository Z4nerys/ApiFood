import React from 'react'
import { useNavigate } from 'react-router-dom'
import loginSound from '../../sounds/login.mp3'

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    new Audio(loginSound).play()
    navigate('/', {
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
