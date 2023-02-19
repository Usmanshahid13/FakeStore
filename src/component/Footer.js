
import {  Copyright } from '@mui/icons-material'
import { CssBaseline, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
// import { useTheme } from '@mui/material/styles';
import React from 'react'

export const Footer = () => {
  return (
   <Box 
   sx={{
     display:"flex",
     flexDirection:"column",
     minHeight:"33vh"
   } }
   >
   <CssBaseline/>
   <Box component="footer"
   sx={{ 
    py:3,
    px:2,
    mt:"auto",
    display:'flex',
    backgroundColor:"lightblue"
    // backgroundColor:(theme)=>
    //    theme.palette.mode==="light"
    //       ? theme.palette.grey[20]
    //       : theme.palette.grey[80]
    

   }}
   >
   <Container maxWidth="sm">
   <Typography variant="body2">
    My sticky footer can be found here
   </Typography>
   <Copyright/>

   </Container>

   </Box>

   </Box>
  )
}
