import React, { Component } from 'react';
import FooterMap from "../map/map.js";
import FB from "../images/FB.png";
import Insta from "../images/insta.png";

import "./footer.css"

class Footer extends Component {

  toTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <footer className="footer">
        <FooterMap />
            <div className="contact-us">
            <h2>Contact Us</h2>
            <h5><strong>Address: </strong>14637 E. Hwy 62, Garfield, AR 72732</h5>
            <h5><strong>Email: </strong> 
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@bigoaksstorage.com"
              >info@bigoaksstorage.com</a></h5>
            <div className="footer-media">
            <a
              className="map-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/bigoaksstorage"
              >
            <img src={FB} alt="Big Oaks Storage Instagram" className="map-a" /></a>
            <a
              className="map-a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bigoaksselfstorage/"
              >
            <img src={Insta} alt="Big Oaks Storage Facebook" className="map-a" /></a>
            </div>
            </div>
        <div>
      © 2018 <a className="atag" href="/">Big Oaks Storage </a>
       | Site By <a className="atag" href="https://markstesney.netlify.com/">Sakkey</a>
      </div>
      </footer>
    );
  }
}

export default Footer;

