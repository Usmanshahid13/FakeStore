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
   <Button color='inherit' variant='outlined' onClick={()=> navigate("/login")}>
    Login
   </Button>
   </Toolbar>
   </AppBar>
  )
}
