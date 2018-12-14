import React, { Component } from 'react';
import "./pricing.css"
import UnitSize from "../images/UnitSize.png";
import UnitSize1 from "../images/UnitSize1.png";
import UnitSize2 from "../images/UnitSize2.png";
import UnitSize3 from "../images/UnitSize3.png";
class Pricing extends Component {


render () {
    return (
        <div className="pricing-container">
        <div className="services">
        <h1>UNIT PRICING</h1>
        <div className="bar"></div>
        <h5>Unit Sizes & Pricing with Insulated Roofs, Concrete Floors, Roll-up Doors</h5>
        </div>
        <div className="price-card-div">
        <div className="price-card">
        <img src={ UnitSize } alt="Storage Unit Size" className="unit-size" />
        <strong>$50</strong>
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
        <div className="price-card1">
        <img src={ UnitSize1 } alt="Storage Unit Size" className="unit-size" />
        <strong>$60</strong>
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
        <div className="price-card2">
        <img src={ UnitSize2 } alt="Storage Unit Size" className="unit-size" />
        <strong>$75</strong>
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
        <div className="price-card3">
        <img src={ UnitSize3 } alt="Storage Unit Size" className="unit-size" />
        <strong>$90</strong>
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
        </div>
        <button className="landing-button1">MORE UNITS</button>
        </div>
        )
    }
};

export default Pricing; 