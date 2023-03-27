import {useState,useCallback} from 'react'
import "../css/login.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';



const Login = () => {

  const navigate = useNavigate();
  const [adminusername,Setadminusername] = useState("");
  const [adminpassword,Setadminpassword] = useState("");

//  function HandelSubmit () {
//   alert('dsfdsfda',username)
    
//  }

const Handleusername = event =>{
  Setadminusername(event.target.value);
  
}

const Handlepassword = event =>{
  Setadminpassword(event.target.value);
}




 const HandelSubmit = useCallback( event => {
  event.preventDefault();
  console.log('sdfd',adminusername,adminpassword)

  if(adminusername === ''){
    alert('Please Enter Username');
  }else if(adminpassword === ''){
    alert('Please Enter Password');
  }else{
    axios.post('https://jntukdmc.in/app/adminlogin.php', {
      username:adminusername,
      password:adminpassword
    })
    .then( (response)=> {
      if(response.data.statusCode === 200){
        navigate('/dashboard');
      }else{
        alert("Invalid Details");
      }
    })
    .catch((error)=> {
      
    });
  }

 },[adminusername,adminpassword])
    
  return (
    <section className="vh-100">
        <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6"> 
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image" />
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        {/* <form> */}
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example13">Email address</label>
            <input type="text"  className="form-control form-control-lg"  onChange={Handleusername}/>
            
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example23">Password</label>
            <input type="password"  className="form-control form-control-lg" onChange={Handlepassword}/>
            
          </div>
      
         <input type="submit" className="btn btn-primary btn-lg btn-block" variant="warning" value="Submit" onClick={HandelSubmit}/>
         {/* </form> */}
        </div>
        </div>
        </div>
    </section>
  )
}

export default Login;