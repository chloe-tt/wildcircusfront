import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Style/News.css"

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3000/api/news").then((response) =>
      setNews(response.data)
    );
  });
  return (
    <div className="newsContainer">
      <div className="news">
        {news.map((neww) => (
          <div className="newsCardContainer">
            <div className="pictureNewsCard">
              <img className="pictureNews" src={neww.picture} alt="visuel covid"/>
            </div>
            <div className="titleNewsCard">
              {neww.title} 
            </div>
            <div className="dateNewsCard">
              Publiée le {neww.date} 
            </div>
            <div className="textNewsCard">
              {neww.text} 
            </div> 
          </div>
       
        ))}
         <br />
      </div>
      <br />
    </div>
  );
};

export default News;