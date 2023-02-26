import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import  {useState, useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/categories")
    .then(res=>{console.log(res.data); setCategories(res.data)})
  },[])
  const [categories, setCategories] = useState();
  return (
   <Container sx={{marginTop:"72px"}}>
    <Typography variant='h3'>Shop by Categories</Typography>
    <Container sx={{py:"10px"}} maxWidth="lg">
     <Grid container>
        {
           categories && categories.map(category=> (
                <Grid md={3} sx={{height:"16 rem",marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",textTransform:"capitalize"}} item>
           <img src="https://global-uploads.webflow.com/5f68a65d0932e3546d41cc61/5f9bfbf985f72747e74a46b5_1604058101946-ada-iq%253A-image-slider-gallery-best-shopify-apps.png" alt="img"></img>
           <Typography sx={{marginTop:"10px"}} variant='h5'><Link href={`/category/${category}`}>{category}</Link></Typography>
               </Grid>
           )
       ) }
     </Grid>
    </Container>
   </Container>
  )
}

export default Home
