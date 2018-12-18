import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import { FaTimes, FaBriefcase, FaBars, FaFile , FaHome, FaUser } from "react-icons/fa";
import BigOaksTitleLogo from "../../components/images/BigOaksTitleLogo.png"
class NavBar extends Component{
    state = {
    isTop: true,
    isMid: false,
    isBot: false,
    isBotter: false
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 400;
    const isMid = window.scrollY > 400 && window.scrollY < 1100;
    const isBot = window.scrollY > 1100 && window.scrollY < 1900;
    const isBotter = window.scrollY > 1900 && window.scrollY < 4100;
    
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
    if (isMid !== this.state.isMid) {
      this.setState({ isMid });
    }
    if (isBot !== this.state.isBot) {
      this.setState({ isBot });
    }
    if (isBotter !== this.state.isBotter) {
      this.setState({ isBotter });
    }
      })
  };

    render(){
        return(
          <div id="navdiv" className="navdiv">
          <div>
          <a className="title1" href="/">
          <img src={ BigOaksTitleLogo } alt="big-oaks-storage-logo" className="logo-pic"></img></a></div>
            <div className="navbar2">
            <Link to='/'><p className="navbarA">HOME</p></Link>
            <Link to='/units'><p className="navbarA">UNITS</p></Link>
            <p className="navbarA">ABOUT</p>
           <p className="navbarA">FAQ</p>
            </div>
            <div className="dropdown">
    <button className="dropbtn">
    <FaBars id="bars" className="bars" onClick={this.click}/>
    <FaTimes id="x" className="x" onClick={this.clickx}/>
    </button>
    <div id="dropdown-content" className="dropdown-content">
    <a style={{color: this.state.isTop ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
                  href="#home">
                  <FaHome/> Home</a>
                <a style={{color: this.state.isMid ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
                  href="#about">
                  <FaUser/>   About</a>
               <a style={{color: this.state.isBot ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
               href="#resume">
                  <FaFile/> Resume</a>
                  <a style={{color: this.state.isBotter ? "rgb(7, 231, 231)" : "rgb(71, 71, 71)"}}
               href="#work">
                  <FaBriefcase/> Projects</a>
    </div>
  </div> 
            </div>
        )
    }

}

export default NavBar;