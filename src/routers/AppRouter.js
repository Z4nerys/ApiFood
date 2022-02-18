import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../components/food/Home'
import { Login } from '../components/login/Login'
import { Navbar } from '../components/navegacion/Navbar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}
