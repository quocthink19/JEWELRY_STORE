import React from 'react'
import {Route, Routes} from 'react-router-dom'
import  CreateJewelryForm from '../AdminComponent/CreateJewelryForm/CreateJewelryForm'
import {Admin} from '../AdminComponent/Admin/Admin'
export default function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={false?<CreateJewelryForm/>:<Admin/>}>

        </Route>
      </Routes>
    </div>
  )
}
xs