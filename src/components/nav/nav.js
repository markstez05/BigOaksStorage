import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import { FaTimes, FaBars, FaArchive , FaHome, FaUser, FaQuestion } from "react-icons/fa";
import BigOaksTitleLogo from "../../components/images/BigOaksTitleLogo.png"
class NavBar extends Component{
 
  click = () =>{
    document.getElementById("dropdown-content").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("x").style.display = "block";
  }
  clickx = () =>{
    document.getElementById("dropdown-content").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("x").style.display = "none";
  }

    render(){
        return(
          <div id="navdiv" className="navdiv">
          <div>
          <a className="title1" href="/">
          <img src={ BigOaksTitleLogo } alt="big-oaks-storage-logo" className="logo-pic"></img></a></div>
            <div className="navbar2">
            <Link to='/'><p className="navbarA">HOME</p></Link>
            <Link to='/units'><p className="navbarA">UNITS</p></Link>
          <Link to='/about'><p className="navbarA">ABOUT</p></Link>  
           <a
                      target="_blank"
              rel="noopener noreferrer"
              href="https://Bigoaksselfstorage.wordpress.com" 
           className="navbarA">BLOG</a>
            </div>
            <div className="dropdown">
    <button className="dropbtn">
    <FaBars id="bars" className="bars" onClick={this.click}/>
    <FaTimes id="x" className="x" onClick={this.clickx}/>
    </button>
    <div id="dropdown-content" className="dropdown-content">
      <Link to='/'><FaHome className="nav-icons"/>HOME</Link>
      <Link to='/units'><FaArchive className="nav-icons"/>UNITS</Link>
      <Link to='/about'><FaUser className="nav-icons" />ABOUT</Link>
      <Link to='/'><FaQuestion className="nav-icons"/>FAQ</Link>
    </div>
  </div> 
            </div>
        )
        
    }

}

export default NavBar;