import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Modal,Box } from '@mui/material';
import style from '../Cart/Cart';
export const Auth = ()=> {
  const location=useLocation();
  const navigate=useNavigate();
  return (
    <>
      <Modal open={
        location.pathname==='/account/register'
        || location.pathname==="/account/login"
      }>

      <Box sx={style}>

      </Box>
      </Modal>
    </>
  )
}
