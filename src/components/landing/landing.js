import React, { Component } from 'react';
import "./landing.css"
import { FaFacebook, FaInstagram, FaFile , FaHome, FaGithub, FaLinkedin, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import BigOaksStorageLogo from "../images/BigOaksStorageLogo.png"
import BigOaksLarge from "../images/BigOaksPNG1.png";

class Landing extends Component {


render () {
    return (
        <div id="home" className="landing-container">
        <div className="opac">
        <div className="photo-text">
        <img src={ BigOaksLarge } alt="Big-Oaks-Storage-Logo-Large" className="oaks-big"/>
        <h1>Big Oaks Self-Storage</h1>
        <h5>Premier, climate control, self-torage units conveniently located in Northwest Arkansas.</h5>
        <button className="landing-button">FIND OUT MORE</button>
        </div>
        </div>
        <div className="landing-bottom-bar">
                  <div className="bottom-bar">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/bigoaksstorage"
              >
            <FaFacebook className="bottom-bar-icons" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bigoaksselfstorage/"
              >
            <FaInstagram className="bottom-bar-icons" /></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/"
              >
              <img src={ BigOaksStorageLogo } alt="Big-Oaks-Storage-Logo" className="bottom-bar-icons1"/>
              </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:email@email.com"
              >
            <FaEnvelope className="bottom-bar-icons" /></a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:1-555-555-5555"
              >
            <FaPhoneSquare className="bottom-bar-icons" /></a>
            </div>
        </div>
        </div>
        )
    }
};

export default Landing; 