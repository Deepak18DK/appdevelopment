import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Leftbar = () => {
    const dispatch= useDispatch();
    const nav=useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


    const logoutHandler = () =>{
        dispatch(logout())
        nav('/')
    }
  return (
    <div>
      
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <ul>
            <li>x</li>
            <li>Records</li>
            <li>Analysis</li>
            <li>Budgets</li>
            <li>Accounts</li>
            <li>Categories</li>
            <li onClick={logoutHandler}>Logout</li>
          </ul>
        </div>
        
          <div className="toggle-button" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
          </div>
          {/* Your content goes here */}
        
      </div>
    
  )
}

export default Leftbar