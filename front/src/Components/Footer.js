import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Style/Footer.css"

const Footer = () => {
    return (
     <div className="footerContainer">
         <div className="footerElement1">
             <a className="footerlink" href="#perf">Performances</a>
             <a className="footerlink" href="#about">About us</a>
             <a className="footerlink" href="#news">News</a>
         </div>
         <div className="footerElement2">
            <a className="footerlink">Buy Tickets</a>
            <a className="footerlink">Contact us</a>
         </div>
         <div className="containerElement3and4">
            <div className="footerElement3">
                <p className="titleFindUS">How to find us? </p>
                <p className="footerAdress">Impasse Brown de Colstoun</p>
                <p className="footerAdress"> 33000 BORDEAUX</p>
            </div>
            <div className="footerElement4">
                <iframe  className="mapAdress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1734.568416219576!2d-0.561525224998078!3d44.87049228638858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5528f6a71b1467%3A0xc75a685fb1ba98d5!2s%C3%89cole%20de%20Cirque%20de%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1595444653337!5m2!1sfr!2sfr" width="250" height="150"></iframe>
            </div>
        </div>

     </div>
    );
  };
  
  export default Footer;