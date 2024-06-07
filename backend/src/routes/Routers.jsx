import React from 'react'
import { Route } from 'react-router-dom'
import { CustomerRoute } from './CustomerRoute'

const Routers = () => {
    return (
        <Routers>
            <Route path='"/admin/jewelry/*' element={<AdminRoute/>}/>
            <Route path='"/*' element={<CustomerRoute/>}/>
        </Routers>
    )
}

export default Routers