import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import HorizontalNavbar from '../../HorizontalNavbar/HorizontalNavbar'
import './NavBar.css'
const Head = () => {
  return (<>
    <header>
    <div class="nbar">
    <nav>
        <ul>
            <li class="nav-list">
                <a href="index.html" class="logo">
                    <img src={require('./Images/logo.png')} alt="brand logo"/>
                   
                </a>
            </li>
            <li class="nav-list">
                   <NavLink to='/scorecard' >
                    <i class="fa-solid fa-clipboard fa-2x fas"></i>
                    <span class="nav-item">Score Card</span>
                    </NavLink> 
            </li>
            <li class="nav-list">
                <a href="#">
                    <i class="fa-solid fa-triangle-exclamation fa-2x fas"></i>
                    <span class="nav-item">Risk Management</span>
                </a>
            </li>
            <li class="nav-list">
                    {/* <i class="fa-solid fa-rectangle-list fa-2x fas"></i> */}
                
                    <NavLink to='/EMR1' >
                    <i class="fa-solid fa-rectangle-list fa-2x fas"></i> 
                    <span class="nav-item">Prior Authorization</span>
                    </NavLink> 
            
            </li>
            <li class="nav-list">
                <a href="#">
                    <i class="fa-solid fa-bars fa-2x fas"></i>
                    <span class="nav-item">Claims</span>
                </a>
            </li>
            <li class="nav-list">
                <a href="#">
                    <i class="fa-solid fa-circle-user fa-2x fas"></i>
                    <span class="nav-item">My Profile</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
</header>
{/* <HorizontalNavbar/> */}
{/* ! scorecard and requests are coming from the outlet when the nested child routes are being hit */}
<Outlet/>
</>
  )
}

export default Head