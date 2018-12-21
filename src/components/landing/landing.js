import React, { Component } from 'react';
import "./landing.css"
import { FaFacebook, FaInstagram, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import BigOaksStorageLogo from "../images/BigOaksGrayScale.png"
import BigOaksLarge from "../images/BigOaksPNG1.png";

class Landing extends Component {

  scrollAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

render () {
    return (
        <div id="home" className="landing-container">
        <div className="opac">
        <div className="photo-text">
        <img src={ BigOaksLarge } alt="Big-Oaks-Storage-Logo-Large" className="oaks-big"/>
        <h1>Welcome to Big Oaks Self-Storage!</h1>
        <h5>We offer premier storage facilities in NWA for all types of self-storage including Boats, RV’s, Residential, Commercial, Climate Control and Warehouse storage.  Our facilities are designed to accommodate EASY ACCESS with full frontage road access and wide open spaces for turn around.  We are conveniently located on Highway 62, just minutes north of Rogers, Arkansas</h5>
        <button onClick={this.scrollAbout}className="landing-button">FIND OUT MORE</button>
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
                href="/"
              >
              <img src={ BigOaksStorageLogo } alt="Big-Oaks-Storage-Logo" className="bottom-bar-icons1"/>
              <img src={ BigOaksLarge } alt="Big-Oaks-Storage-Logo" className="bottom-bar-icons2"/>
              </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@bigoaksstorage.com"
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