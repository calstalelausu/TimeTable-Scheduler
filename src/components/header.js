import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home'
import About from '../pages/about'


const MainMenu = () => {
    return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
    );
    };

export default class Header extends Component{
 render(){
 return(
     <div>
     <Router>
        <MainMenu/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
      </div>
)}
}