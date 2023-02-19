import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import axios from 'axios';


export default function BasicTable() {
    const [users,setUser]=useState([]);
   useEffect(()=>{
    axios.get('https://fakestoreapi.com/users')
    .then(res=> setUser(res.data))
    .then(json=>console.log(json))

   },[])

  return (

    <TableContainer component={Paper} sx={{maxWidth:"70%",margin:"auto"}}>
      <Table sx={{ minWidth: 650,marginTop:10}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Zip code</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                             <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address.number} {row.address.street}, {row.address.city}</TableCell>
                                <TableCell align="right">{row.address.zipcode}</TableCell>
                                {/* <TableCell align="right"><Link to={`/user/${row.id}`}>View</Link></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}