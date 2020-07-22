import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Style/Navbar.css"

const Navbar = () => {
    return (
     <div className="headerContainer">
         <div className="logoContainer">
            <img className="logo" src="https://i.ibb.co/PtwDYn3/logo-3-final.jpg" alt="Wild Circus Logo" />
         </div>
         <div className="headerElementContainer">
             <a className="headerElement">Performance</a>
             <a className="headerElement">About Us</a>
             <a className="headerElement">News</a>
         </div>
         <div className="buyCTAContainer">
             <button className="buyCTA">Buy Tickets</button>
         </div>
     </div>
    );
  };
  
  export default Navbar;