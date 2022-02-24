import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import loginSound from '../../sounds/login.mp3'
import { types } from '../../types/types';

export const Login = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogin = () =>{
    const action ={
      type: types.login,
      payload: { name: 'gaston' }
    }
    dispatch(action);
    
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
