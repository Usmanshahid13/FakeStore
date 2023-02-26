import { Container } from '@mui/system'
import {Button,TextField,Typography, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import React from 'react'
// import StarRatings from 'react-star-ratings';


const Product = () => {
    const params=useParams();
    // const[rating,setRating]=useState([]);
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => { setProduct(res.data);
          // console.log(res.data.rating.rate);
          //  setRating(res.data.rating.rate) 
        })
}, [params.id])
   
    return (
    <div>
    <Container sx={{marginTop:"100px"}}>
        <Grid container spacing={4}>
          <Grid style={{
            backgroundImage: ` url(${product.image})` ,
            // height :"60vh",
            marginTop:20,
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
                      }} item md={4}>
                      
          </Grid>
                      <Grid item md={8}>
                        <Typography gutterBottom variant='h3'>{product.title}</Typography>
                        <Typography gutterBottom variant='h4'>${product.price}</Typography>
                        <Typography gutterBottom variant='h5'>{product.category}</Typography>
                        {/* <StarRatings
                            rating={product.rating.rate}
                            starDimension="30px"
                            starSpacing='3px'
                            starRatedColor='#F1C40E'
                        /> */}
          <Typography gutterBottom paragraph>{product.description}</Typography>
          <TextField sx={{ width: '100px', textAlign: 'center' }} value={1} type='number' variant='standard' />
                        <br />
                        <br />
                        <br />
                        <Button color='warning' disableRipple variant='contained'>Add to Cart</Button>
         </Grid>
        </Grid>
    </Container>
      
    </div>
  )
}

export default Product
