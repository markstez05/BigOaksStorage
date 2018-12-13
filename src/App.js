import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Nav from "./components/nav/nav";
import Services from "./components/services/services";
import Pricing from "./components/pricing/pricing";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="big-oaks-storage-bg" ></div>
      <Nav />
      <Landing />
      <Services />
      <Pricing />
      <div>
      <footer className="footer">
      <div>
        <p>contact</p>
      </div>
      <div>
      © 2018 
      <a className="atag" href="https://markstesney.netlify.com/">Mark Stesney</a>
       | Site By <a className="atag" href="https://markstesney.netlify.com/">Sakkey</a>
      </div>
      </footer>
      </div>
      </div>
    );
  }
}

export default App;
