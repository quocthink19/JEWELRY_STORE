import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../AdminComponent/Admin/Admin'



export const AdminRoute = () => {
    const {jewelry}=useSelector(store=>store)
    return (
        <div>
            <Routes>
                <Route path='/*' element={<Admin/>}>
                {/* <Route path='/*' element={jewelry.usersJewelry ? <CreateJewelryForm/>:<Admin/>}></Route> */}
                
                </Route>
            </Routes>
        </div>
    )
}