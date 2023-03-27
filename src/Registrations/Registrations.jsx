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
    axios.get('https://jntukdmc.in/app/samplenotification.php', { 
    })
    .then(function (response) {
       //console.log('test',response.data.NotificationData)
      Setnotifications(response.data.NotificationData);
    })
  },[notifications])

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
        <h1 className="m-0">Notifications</h1>
        </div>
        <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Notifications</li>
            </ol>
            <a href="/addnotification">New Notification</a>
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
            <TableCell  sx={{backgroundColor:'red'}}>Notification Id</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Department</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Title</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Description</TableCell>
            <TableCell  sx={{backgroundColor:'red'}}align="left">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((row) => (
            <TableRow
              key={row.notificationid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.notificationid}
              </TableCell>
              <TableCell align="right">{row.Depatments}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
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