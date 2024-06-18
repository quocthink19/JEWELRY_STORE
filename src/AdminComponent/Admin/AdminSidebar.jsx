import { Dashboard, ShoppingBag } from '@mui/icons-material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CategoryIcon from '@mui/icons-material/Category';
import DiamondIcon from '@mui/icons-material/Diamond';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';



const menu = [
    { title: "Dashboard", icon: <Dashboard />, path: "/" },
    { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
    { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
    { title: "Category", icon: <CategoryIcon />, path: "/category" },
    { title: "Ingredients", icon: <DiamondIcon />, path: "/ingredients" },
    { title: "Events", icon: <EventIcon />, path: "/event" },
    { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
    { title: "Logout", icon: <LogoutIcon />, path: "/logout" },
]

export const AdminSidebar = ({ handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (item) => {
        if(item.title ==="Logout"){
            dispatch(logout());
            navigate("/")
        } else {
            navigate(`/admin/jewelry${item.path}`);
        }
        // Đóng thanh điều hướng sau khi điều hướng
        handleClose();
    }

    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={true}
                anchor='left'
                sx={{ zIndex: 1 }}>

                <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>

                    {menu.map((item, i) => (
                        <div onClick={()=>handleNavigate(item)}className='px-5 flex items-center gap-5 cursor-pointer'>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    ))}

                    {/* Thêm dấu phân chia giữa các mục */}
                    <Divider />
                </div>
            </Drawer>
        </div>
    );
}
