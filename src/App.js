import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Nav from "./components/nav/nav";
import Services from "./components/services/services";
import Pricing from "./components/pricing/pricing";
import Footer from "./components/footer/footer.js";
import FooterMap from "./components/map/map.js";
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
      <FooterMap />
      <Footer />
      </div>
    );
  }
}

export default App;
