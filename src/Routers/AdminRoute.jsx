import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../AdminComponent/Admin/Admin'
import CreateJewelryForm from '../AdminComponent/CreateJewelryForm/CreateJewelryForm'



export const AdminRoute = () => {
    const {restaurant} = useSelector((store)=>store);
    return (
        <div>
            <Routes>
                <Route path='/*'
                element={
                    !restaurant.userRestaurant ? <Admin/>:<CreateJewelryForm/>
                }>
                </Route>
            </Routes>
        </div>
    )
}