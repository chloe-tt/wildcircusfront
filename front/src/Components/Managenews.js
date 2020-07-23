import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Style/Managenews.css"
import { NavLink } from 'react-router-dom';

const ManageNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/news").then((response) =>
      setNews(response.data)
    );
  });
  return (
      <div className="titleManage">
          
    <div className="manageNewsContainer">
        <div className="containerAddCTA">
            <h2>Manage News</h2>
        </div>
        <div className="containerAddCTA">
            <div className="containerAddNews"> 
             <NavLink className="addNewsCTA" to="/create-news">Add News</NavLink>
             </div>
        </div>
    <div className="containerManageNews">
    
      <div className="manageNews">

     
        {news.map((neww) => (
          <div className="manageNewsCardContainer">
              
            <div className="managePictureNewsCard">
              <img className="managePictureNews" src={neww.picture} alt="visuel covid"/>
            </div>
            <div className="manageTitleNewsCard">
              {neww.title} 
            </div>
            <div className="manageTextNewsCard">
              {neww.date} 
            </div> 
            <div className="manageTextNewsCard">
              {neww.user_name} 
            </div> 
            <div className="manageTextNewsCard">
              <button className="editCTA">Edit</button> 
            </div> 
            <div className="manageTextNewsCard">
              <button className="deleteCTA">Delete</button> 
            </div> 
           
          </div>
       
        ))}
        <br />
         <br />
      </div>
      </div>
      <br />
    </div>
    </div>
  );
};

export default ManageNews;