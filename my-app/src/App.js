import React,{useState} from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Footer from './Footer';
import FooterNews from './FooterNews';
import Footer_end from './Footer_end';
import Header from './Header';
import Header2 from './Header2';
import Top_bar from './Top_bar';
import { BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import HomePage from './HomePage';
import Center from './Center';
import Price_tag from './Price_tag';
import Seller from './Seller';
import About from './About';



function App() {
  return (
   
    <div className="App">
    <Router>
    <Top_bar />
    <Header />
   
    
    <div className='r_dashboard'>
    <Switch>
      <Route exact path="/" >
      
       <HomePage />
      </Route>
         
      <Route path='/about'>
      <About />
  
      </Route>
    </Switch>


    <FooterNews />
    <Footer />
    <Footer_end />

   </div>
   </Router>
    
    
    </div>
   
  );
}

export default App;
