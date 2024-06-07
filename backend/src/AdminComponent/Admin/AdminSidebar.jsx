import { Dashboard, ShoppingBag } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import React from 'react';
// thay thế icon fastfood thành icon diamond
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DiamondIcon from '@mui/icons-material/Diamond';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../backend/src/Component/State/Authentication/Action';



const menu=[
    {title:"Dashboard",icon:<Dashboard/>, path:"/"},
    {title:"Orders",icon:<ShoppingBag/>, path:"/orders"},
    {title:"Menu",icon:<ShopTwoIcon/>, path:"/menu"},
    {title:"Category",icon:<CategoryIcon/>, path:"/category"},
    {title:"Ingredients",icon:<DiamondIcon/>, path:"/ingredients"},
    {title:"Events",icon:<EventIcon/>, path:"/event"},
    {title:"Details",icon:<AdminPanelSettingsIcon/>, path:"/details"},
    {title:"Logout",icon:<LogoutIcon/>, path:"/"},
]

export const AdminSidebar = () => {
    const isSmallScreen=useMediaQuery("(max-width:1080px)")
    const navigate=useNavigate();
    const dispatch=useDispatch()

    const handleNavigate = (item) => {
        navigate(`/admin/jewelrys${item.path}`)
        if (item.title === "logout") {
            navigate("/")
            dispatch(logout())
            handleClose()
        }
    }
    return (
        <div>
            <>
            <Drawer
            variant={isSmallScreen?"temporary":"permanent"}
            onClose={handleClose}
            open={true}
            anchor='left'
            sx={{zIndex:1}}>

                <div onClick={()=>handleNavigate(item)} className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]'>
                    {menu.map((item)=><>
                    <div className='px-5 flex items-center gap-5 cursor-pointer'>
                        {item.icon}
                        <span>{item.icon}</span>
                    </div>
                    {i!==menu.length-1 && <Divider/>}
                    </>)}
                </div>
                
            </Drawer>
            </>
        </div>
    )
}