import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {AdminRoute} from './AdminRoute'
import {StaffRoute} from './StaffRouter'
const Routers = () => {
  return (
    <Routes>
        <Route path='"/admin/jewelry/*' element={<AdminRoute/>}></Route>
        <Route path='/*' element={<StaffRoute/>}></Route>
    </Routes>
  )
}

export default Routers
