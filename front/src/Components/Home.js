import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Style/Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import News from "./News";


const Home = () => {
    return (
     <div className="homeContainer" >
         <section id="perf" >
         <h2>Performance</h2>
        <div className="performanceContainer">
        <Carousel autoPlay>
                <div>
                <img className="slide" src="https://zupimages.net/up/20/30/0l28.png" alt="Marvel at" />
                </div>
                <div>
                <img className="slide" src="https://zupimages.net/up/20/30/hxr5.png" alt="Dream" />
                </div>
                <div>
                    <img className="slide" src="https://zupimages.net/up/20/30/0ehs.png" alt="" />
                </div>
            </Carousel>
        </div>
        </section>
        <section id="about">
        <div className="aboutUsConatiner" >
            <h2>About Us</h2>
            <div className="contentAboutUsContainer">
                <div className="videoAboutUs">
                    <iframe width="520" height="300" src="https://www.youtube.com/embed/3yjwn1OrtXw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="textAboutUs">
                    <p> Wild Circus was founded in 2000 in Bordeaux by two circus lovers, the Wild brothers.</p>
                    <p>Our adventure started by building a maroon and gold showmans wagon to live in. We advertised for performers in Sud Ouest and held auditions in a little dusty theatre. These were our first baby steps, and since then we have taken a new show out on the roads of France every summer.</p>
                    <p>Since that start in 2000 we have entertained over a million people, and have worked with some extraordinary circus performers and creative.</p>
                </div>
            </div>
            
        </div>
        </section>
        <section id="news">
        <div className="newsConatiner">
            <h2>Wild Circus News</h2>
                <News />
        </div>
        </section>
     </div>
    );
  };
  
  export default Home;