import React from 'react'
import { Route, Routes } from 'react-router-dom'








export const CustomerRoute = () => {
    return (
        <div>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/account/:register' element={<Home/>}/>
                    <Route path='/restaurant/:city?:title?:id' element={<RestaurantDetail/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/my-profile/*' element={<Profile/>}/>
                    <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
                </Routes>
            <Auth/>
        </div>
    )
}