import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Navbar} from '../Navbar/Navbar'
import Home from '../Home/Home'
import JewelryDetails from '../Jewelry/JewelryDetails'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import { Auth } from '../Auth/Auth'

export const StaffRouter =() => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/jewelry/:city/:title/:id' element={<JewelryDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile/>}/>
      </Routes>
    </div>
  )
}
