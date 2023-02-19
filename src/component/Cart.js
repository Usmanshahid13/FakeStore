import { Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios';
import CartProduct from "./CartProduct"

import  { useState,useEffect } from 'react'

export const Cart = () => {
    const[cart, setCart] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/carts/2')
        .then(res=>{setCart(res.data)
            console.log(res.data)})
        
    })
  return (
   <Container sx={{marginTop:"80px"}}>
     <Typography variant='h3' gutterBottom>Your Cart</Typography>
     <Grid containerspacing={10} rowSpacing={5}>
     <Grid item xs={12} md={9}>
     <Paper elevation={10}>
     {
        cart.length ?? cart.product.map((product)=>(
            <CartProduct productId={product.productId} qty={product.quantity}/>
        ))
     }

     </Paper>
     </Grid>
    <Grid item xs={12} md={3}>
        Details
    </Grid>
     </Grid>
   </Container>
  )
}
