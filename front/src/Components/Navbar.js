import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Style/Navbar.css"

const Navbar = () => {
    return (
     <div className="headerContainer">
         <div className="logoContainer">
            
             <div>
             <NavLink to="/"> <img className="logo" src="https://zupimages.net/up/20/30/69q7.png" alt="Wild Circus Logo" /></NavLink>
             </div>
         
             
            
            
         </div>
         <div className="headerElementContainer">
             <a className="headerElement" href="/#perf">Performance</a>
             <a className="headerElement" href="/#about">About Us</a>
             <a className="headerElement" href="/#news" >News</a>
         </div>
         <div className="buyCTAContainer">
             <NavLink className="buyCTA" to="/buy-tickets">Buy Tickets</NavLink>
             
           
         </div>
     </div>
    );
  };
  
  export default Navbar;