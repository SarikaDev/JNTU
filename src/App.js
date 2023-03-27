import logo from './logo.svg';
import './App.css';
import {Routes,Route } from "react-router-dom"; 
import Login from './Login/Login';
import Dashboard from './Dashboard/dashboard';
import Menu from './Menu/Menubar';
import Registrations from './Registrations/Registrations';
import NewNotification from './Registrations/Newnotification';
import Sample from './Registrations/Samplenotifications';
function App() {
  return (
    
    <div className="wrapper">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Menu/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registrations" element={<Registrations />} />
        <Route path="/addnotification" element={<NewNotification />} />
        <Route path="/samplenotifications" element={<Sample />} />
       </Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
