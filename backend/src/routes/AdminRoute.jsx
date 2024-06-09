import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../AdminComponent/Admin/Admin'
import CreateJewelryForm from '../AdminComponent/CreateJewelryForm/CreateJewelryForm'

export const AdminRoute = () => {
    const {jewelry}=useSelector(store=>store)
    return (
        <div>
            <Routes>
                <Route path='/*' element={
                    !jewelry.usersJewelry ? <CreateJewelryForm/>:<Admin/>}>
                
                </Route>
            </Routes>
        </div>
    )
}