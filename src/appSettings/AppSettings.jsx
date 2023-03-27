import {useEffect,useState} from 'react'
import axios from "axios";



const AppSettings = () => {

  const[events,Setevents] = useState("");

  const[colleges,Setcolleges] = useState("");

  const[departments,Setdepartments] = useState("");

  const[notifications,Setnotifications] = useState("");


  useEffect(()=>{
    axios.get('https://jntukdmc.in/app/countdata.php', { 
    })
    .then(function (response) {
      Setevents(response.data.Dashboardcount[0].eventcount)
      //console.log('test',response.data.Dashboardcount[0].eventcount)
      Setcolleges(response.data.Dashboardcount[0].collegescount)
      Setdepartments(response.data.Dashboardcount[0].departmentcount)
      Setnotifications(response.data.Dashboardcount[0].notificationcount)
    })
  },[])

  
  


  return (
    <div className="content-wrapper">
        <div className="content-header">
        <div className="container-fluid">
        <div className="row mb-2"> 
        <div className="col-sm-6">
        <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
        </div>
        </div>
        </div>
        </div>
        <section className="content">
        <div className="container-fluid"> 
        <div className="row">

        <div className="col-lg-3 col-6">
           
           <div className="small-box bg-success">
             <div className="inner">
               <h3>{colleges}</h3>

               <p>Colleges</p>
             </div>
             <div className="icon">
               <i className="ion ion-stats-bars"></i>
             </div>
             {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
           </div>
         </div>

         <div className="col-lg-3 col-6">
           
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>{departments}</h3>

                <p>Departments</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>


          <div className="col-lg-3 col-6">
           
            <div className="small-box bg-info">
              <div className="inner">
                <h3>{events}</h3>

                <p>Events</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>
          
          
          
          
          
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>{notifications}</h3>

                <p>Notifications</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>
          
        </div>
        </div>
        </section>
    </div>
  )
}

export default AppSettings
