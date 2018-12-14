import React, { Component } from 'react';
import "./nav.css";
import { FaTimes, FaBriefcase, FaBars, FaFile , FaHome, FaGithub, FaLinkedin, FaEnvelope, FaPhoneSquare, FaUser } from "react-icons/fa";
import BigOaksTitleLogo from "../../components/images/BigOaksTitleLogo.png"
class NavBar extends Component{
    state = {
    isTop: true,
    isMid: false,
    isBot: false,
    isBotter: false
  };

  // click = () =>{
  //   document.getElementById("dropdown-content").style.display = "block";
  //   document.getElementById("bars").style.display = "none";
  //   document.getElementById("x").style.display = "block";
  // }
  // clickx = () =>{
  //   document.getElementById("dropdown-content").style.display = "none";
  //   document.getElementById("bars").style.display = "block";
  //   document.getElementById("x").style.display = "none";
  // }
  componentDidMount() {
    document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 400;
    const isMid = window.scrollY > 400 && window.scrollY < 1100;
    const isBot = window.scrollY > 1100 && window.scrollY < 1900;
    const isBotter = window.scrollY > 1900 && window.scrollY < 4100;
    
    console.log(window.scrollY);
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
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  };
  
  scrollTop = () => {
     document.documentElement.scrollTop = 0;
   }
    render(){
        return(
          <div id="navdiv" className="navdiv">
          <div>
          <a className="title1" href="/">
          <img src={ BigOaksTitleLogo } alt="big-oaks-storage-logo" className="logo-pic"></img></a></div>
            <div className="navbar2">
            <p className="navbarA">HOME</p>
              <p className="navbarA">UNITS</p>
            <p className="navbarA">ABOUT</p>
           <p className="navbarA">CONTACT</p>
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
                  {/* <div className="navbar3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mark-stesney/"
              >
            <FaLinkedin className="icons3" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/markstez05"
              >
            <FaGithub className="icons3" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:mstesney13@gmail.com"
              >
            <FaEnvelope className="icons3" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:1-918-361-8479"
              >
            <FaPhoneSquare className="icons3" /></a>
            </div> */}
    </div>
  </div> 
            </div>
        )
    }

}

export default NavBar;