import React from 'react'
import {useState,useCallback} from 'react'
import axios from "axios";
import { useEffect } from 'react';
import ReactTable from "react-table";
import $ from 'jquery';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
function Registrations() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [notifications,Setnotifications] = useState([]);

  useEffect(()=>{
    axios.get('https://jntukdmc.in/app/samplelistnot.php', { 
    })
    .then(function (response) {
       //console.log('test',response.data)
      Setnotifications(response.data);
    })
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="content-wrapper">
        <div className="content-header">
        <div className="container-fluid">
        <div className="row mb-2"> 
        <div className="col-sm-6">
        <h1 className="m-0">Sample</h1>
        </div>
        <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Notifications</li>
            </ol>
           
        </div>
        </div>
        </div>
        </div>
        <section className="content">
        <div className="container-fluid"> 
        <div className="row">
        <div className="card-body">
        <TableContainer >
      <Table stickyHeader   aria-label="simple table">
        <TableHead sx={{color:'red'}}>
          <TableRow>
            <TableCell  sx={{backgroundColor:'red'}}>Title</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Description</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Deparment</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Image</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((row) => (
            <TableRow
              key={row.notificationid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right"><img src={`https://jntukdmc.in/app/testing/${row.image}`}  width={100}/> </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          //count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
              </div>
          
        </div>
        </div>
        </section>
    </div>
  )
  
}

$(document).ready(function() {
  $('#example1').DataTable();
});


export default Registrations