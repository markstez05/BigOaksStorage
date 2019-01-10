import React, { Component } from 'react';
import "./aboutUs.css";
import StorageContainer from "../images/oaks.jpg"

class AboutUs extends Component{
    render(){
        return(
            <div className="about-container">
            <div className="new">
        <div className="second-text">
        <h1>OUR STORY</h1>
        <div className="bar3"></div>
     <p data-aos="fade-left">Big Oaks Self-Storage is not only proud to be family & locally-owned and operated, but also we
take pride in the history we bring along with the name “Big Oaks”. When you arrive on site, you can’t
help but notice several very old oak trees that take residency on our property. When developing the
property, we preserved these beautiful Oak trees, because of their captivating structure and meaning
they bring to the Big Oaks Self Storage name. Some of these trees have been standing strong for over
100 years.</p>
</div>
 <div className="about1">
        <div data-aos="fade-up" className="third-text">
           <p>Prior to Big Oaks Self Storage, the property would host an annual craft fair know to the locals as
Quail Oaks Craft Fair. The grounds also served as an RV Park or camp year round. People enjoyed the
tranquil setting and the shaded areas provided by the giant oak trees. When choosing our units we
would just like our customers to remember how much pride we not only take in our business but our
love for our community and land in the “Natural State.”</p>
        </div>
        <div className="storage-div"> 
        <img src={ StorageContainer} alt="NWA Storage Unit" className="storage-photo3" />
        </div>
        </div>
        </div>
            </div>
            
    )}
}
export default AboutUs;