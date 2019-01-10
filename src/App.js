import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Landing from "./components/landing/landing";
import Nav from "./components/nav/nav";
import Services from "./components/services/services";
import Pricing from "./components/pricing/pricing";
import Footer from "./components/footer/footer.js";
import Units from "./components/units/units.js";
import AboutUs from "./components/about/aboutUs.js";

import AOS from 'aos'
import 'aos/dist/aos.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
        window.scrollTo(0, 0);
    AOS.init({
      duration : 1700
    })
  }
  render() {
    return (
      <div className="App">
      <div className="big-oaks-storage-bg" ></div>
      <Route path ='/'  component={Nav}/>
      <Route exact path='/about' component={AboutUs} />
      <Route exact path ='/' component={Landing}/>
      <Route exact path ='/' component={Services}/>
      <Route exact path ='/' component={Pricing}/>
      <Route exact path='/units' component={Units} />
      <Route path ='/' component={Footer}/>
      </div>
    );
  }
}

export default App;
