import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/food/Home'
import { Navbar } from '../components/navegacion/Navbar'
import { Search } from '../components/search/Search'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='home' element={<Home/>}/>
                    <Route path='search' element={<Search/>}/>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>
        </>
   
  )
}
