import { ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate=useNavigate();
  return (
   <AppBar position='fixed'>
   <Toolbar sx={{justifyContent:"space-between"}}>
   <Typography variant='h6' component="div" onClick={()=> navigate("/")}>
    Fake Store
   </Typography>
   <div className='right-nav-icon' style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "10rem"}}>

   <Button color='inherit' variant='outlined' onClick={()=> navigate("/login")}>
    Login
   </Button>
   <ShoppingCartCheckoutOutlined onClick={()=> navigate("/checkout/cart")}/>
   </div>
   </Toolbar>
   </AppBar>
  )
}
