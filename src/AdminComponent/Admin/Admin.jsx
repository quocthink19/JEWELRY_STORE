import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { JewelryDetails } from '../Admin/JewelryDetails'
import { Category } from '../Category/Category'
import Dashboard from '../Dashboard/Dashboard'

import { useDispatch, useSelector } from 'react-redux'
import { Events } from '../Events/Events'
import Ingredients from '../Ingredients/Ingredients'
import CreateMenuForm from '../Menu/CreateMenuForm'
import { Menu } from '../Menu/Menu'
import { Orders } from '../Orders/Orders'
import { AdminSidebar } from './AdminSidebar'
import Footer from '../Footer/Footer'
import Home from '../HomeA/Home'
import Teams from '../Staff/Teams'
import Customer from '../Customer/Customer'


export const Admin = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { jewelry } = useSelector(store => store);
    const handleClose = () => { }

    // useEffect(()=>{
    //     dispatch(getCategory({
    //         jwt,
    //         jewelryId:jewelry.userJewelry?.id,
    //     })
    //     );
    //     dispatch(fetchJewelryOrder({
    //         jwt,
    //         jewelryId:jewelry.userJewelry?.id,
    //     }))
    //     // dispatch(getMenuItemsByJewelryId())
    //     // dispatch(getJewelryById())
    // })

    return (
        <div>
            <div className='lg:flex justify-between'>
                <div>
                    <AdminSidebar handleClose={handleClose} />
                </div>
                <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/category' element={<Category />} />
                        <Route path='/ingredients' element={<Ingredients />} />
                        <Route path='/event' element={<Events />} />
                        <Route path='/details' element={<JewelryDetails />} />
                        <Route path='/add-menu' element={<CreateMenuForm />} />
                        <Route path='/teams' element={<Teams/>} />
                        <Route path='/customer' element={<Customer/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
