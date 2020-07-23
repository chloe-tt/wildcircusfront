import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../src/Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Buytickets from './Components/Buytickets'
import Createnews from './Components/Createnews'
import Managenews from './Components/Managenews'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/buy-tickets" component={Buytickets} />
          <Route path="/create-news" component={Createnews} />
          <Route path="/manage-news" component={Managenews} />
          <Footer />
        </div>
        
      </Switch>
    
    </BrowserRouter>
    
      
  
  );
}

export default App;
