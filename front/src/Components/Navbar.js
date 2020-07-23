import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Style/Navbar.css"

const Navbar = () => {
    return (
     <div className="headerContainer">
         <div className="logoContainer">
            
             <div>
                <img className="logo" src="https://i.ibb.co/PtwDYn3/logo-3-final.jpg" alt="Wild Circus Logo" />
             </div>
         
             
            
            
         </div>
         <div className="headerElementContainer">
             <a className="headerElement" href="#perf">Performance</a>
             <a className="headerElement" href="#about">About Us</a>
             <a className="headerElement" href="#news" >News</a>
         </div>
         <div className="buyCTAContainer">
             <NavLink className="buyCTA" to="/buy-tickets">Buy Tickets</NavLink>
             
           
         </div>
     </div>
    );
  };
  
  export default Navbar;