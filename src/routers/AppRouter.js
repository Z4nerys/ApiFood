import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../components/food/Home'
import { Login } from '../components/login/Login'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            
        </Routes>
    </BrowserRouter>
  )
}
