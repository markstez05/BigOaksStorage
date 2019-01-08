import React, { Component } from 'react';
import "./pricing.css"
import { Link } from "react-router-dom";
import UnitSize from "../images/UnitSize.png";
import UnitSize1 from "../images/UnitSize1.png";
import UnitSize2 from "../images/UnitSize2.png";
import UnitSize3 from "../images/UnitSize3.png";
import UnitSize4 from "../images/UnitSize4.png"
import { FaArrowUp } from "react-icons/fa";

class Pricing extends Component {
    constructor(props){
        super(props);
      }

    scrollTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

render () {
    return (
        <div className="pricing-container">
        <div className="services">
        <h1>UNIT PRICING</h1>
        <div className="bar"></div>
        <p id="tag-alt" className="tag-alt">Premier self-storage units conveniently located in Northwest Arkansas</p>
        </div>
        <div className="price-card-div">
        <div  data-aos="flip-right" className="price-card">
        <img src={ UnitSize3 } alt="Storage Unit Size" className="unit-size" />
        <strong>$30</strong> per month
        <div className="price-list">
        <div className="cost-title">
        <p>Outside Trailer:</p>
        <p>RV:</p>
        </div>
        <div className="cost-value">
            <p>Parking</p>
            <p>Parking</p>
        </div>
        </div>
        <button className="price-button">RESERVE TODAY</button>
        </div>
        <div  data-aos="flip-right" className="price-card1">
        <img src={ UnitSize } alt="Storage Unit Size" className="unit-size" />
        <strong>$50</strong>per month
        <div className="price-list">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>120 sq. ft.</p>
            <p>10' W x 10' H</p>
        </div>
        </div>
        <button className="price-button">RESERVE TODAY</button>
        </div>
        <div  data-aos="flip-right" data-aos-delay="400" className="price-card2">
        <img src={ UnitSize1 } alt="Storage Unit Size" className="unit-size" />
        <strong>$60</strong>per month
        <div className="price-list">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>180 sq. ft.</p>
            <p>10' W x 10' H</p>
        </div>
        </div>
        <button className="price-button">RESERVE TODAY</button>
        </div>
        <div data-aos="flip-right" data-aos-delay="800" className="price-card3">
        <img src={ UnitSize2 } alt="Storage Unit Size" className="unit-size" />
        <strong>$75</strong>per month
        <div className="price-list">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>240 sq. ft.</p>
            <p>10' W x 10' H</p>
        </div>
        </div>
        <button className="price-button">RESERVE TODAY</button>
        </div>
        <div data-aos="flip-right" data-aos-delay="1200" className="price-card3">
        <img src={ UnitSize3 } alt="Storage Unit Size" className="unit-size" />
        <strong>$90</strong>per month
        <div className="price-list">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>360 sq. ft.</p>
            <p>10' W x 10' H</p>
        </div>
        </div>
        <button className="price-button">RESERVE TODAY</button>
        </div>
                <div data-aos="flip-right" data-aos-delay="1200" className="price-card3">
        <img src={ UnitSize4 } alt="Storage Unit Size" className="unit-size" />
        <strong>$160</strong>per month
        <div className="price-list">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>560 sq. ft.</p>
            <p>12' W x 14' H</p>
        </div>
        </div>
        <button className="price-button">RESERVE TODAY</button>
        </div>
        </div>
        
       <Link to="/units"> <button className="landing-button1">MORE UNITS</button></Link>
       <FaArrowUp 
       onClick={ this.scrollTop }
       className="arrow"
       />
        </div>
        )
    }
};

export default Pricing; 