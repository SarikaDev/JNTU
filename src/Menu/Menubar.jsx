import React from 'react'
import AppHeader from '../appHeader/appHeader';
import AppMenu from '../appMenu/appMenu';
import AppFooter from '../appFooter/appFooter';

import { Outlet } from 'react-router-dom';
const Menubar = () => {
  return (
    
    <div>
      <AppHeader />
      <AppMenu />
     
         <Outlet />
      
      <AppFooter /> 
    </div>
  )
}

export default Menubar
