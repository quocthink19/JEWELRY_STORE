import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Admin } from '../AdminComponent/Admin/Admin';
import CreateAreaForm from '../AdminComponent/CreateAreaForm/CreateAreaForm';




export const AdminRoute = () => {
    const {area}=useSelector(store=>store)
    return (
        <div>
            <Routes>
                <Route path="/*" 
                element={
                    !area.userArea ? <Admin/>:<CreateAreaForm/>

      }         
                ></Route>
            </Routes>
        </div>
    );
};