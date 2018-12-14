import React, { Component } from 'react';
import { FaUserPlus, FaMoneyBill, FaUserSecret } from "react-icons/fa";
import StorageContainer from "../images/oaks.jpg"
import RV from "../images/RV Storage.png";
import Boat from "../images/Boat Storage.png";
import Commercial from "../images/Commercial Storage.png";
import "./services.css"

class Services extends Component {


render () {
    return (
        <div className="services-container">
        <div className="services">
        <h1>STORAGE SERVICES</h1>
        <div className="bar"></div>
        <h5>Premier Storage Facilities in NWA For All Types of Self-Storage</h5>
        </div>
        <div className="card-container">
        <div className="card">
        <FaUserPlus className="card-icons" />
        <h3>Convenience</h3>
        <div className="card-list">
            <li>Climate Control</li>
            <p></p>
            <li>Full Frontage Road Wide Entry Gates </li>
            <p></p>
            <li>Convenient Pick-Up & Drop-Off</li>
            <p></p>
            </div>
        </div>
        <div className="card">
        <FaMoneyBill className="card-icons" />
        <h3>Competitive Rates</h3>
        <div className="card-list">
            <li>Best Competitive Rates in NWA  </li>
            <p></p>
            <li>"Golden Rule" Customer Service </li>
            <p></p>
            <li>New Modern Facilities</li>
            <p></p>
            </div>
        </div>
        <div className="card">
        <FaUserSecret className="card-icons" />
        <h3>Secure</h3>
        <div className="card-list">
            <li>Individual Access Codes</li>
            <p></p>
            <li>Gated & Surveillance Cameras</li>
            <p></p>
            <li>Large Units with Insulated Roofs</li>
            <p></p>
            </div>
        </div>
        </div>
        <div className="about">
        <div className="about-us">
        <h1>ABOUT US</h1>
        <div className="bar2"></div>
        <p>We offer premier storage facilities in NWA for all types of self-storage including Boats, RV’s, Residential, Commercial, Climate Control and Warehouse storage. Our facilities are designed to accommodate EASY ACCESS with full frontage road access and wide open spaces for turn around. We are located on Highway 62 five minutes North of Rogers, AR.</p>
        </div>
        <img src={ StorageContainer} alt="NWA Storage Unit" className="storage-photo" />
        </div>
        <div className="units">
        <div className="services">
        <h1>STORAGE UNITS</h1>
        <div className="bar"></div>
        <h5>Boat Storage, RV Storage, Residential, Commercial, Climate Control, Mobile Storage (coming soon)</h5>
        </div>
        <div className="storage-photos">
        <div className="boat-div">
        <h2>Boats</h2>
        <img src={Boat} alt="boat storage unit" className="storage-unit-boat" />
        <div className="slide-info">
        <p>Sign a one year lease with first month free storage</p>
        </div>
        </div>
        <div className="commercial-div">
        <h2>Commercial</h2>
        <img src={Commercial} alt="commercial storage unit" id="commercial" className="storage-unit-commercial" />
        <div className="slide-info">
        <p>No security deposit required</p>
        </div>
        </div>
        <div className="rv-div">
        <h2> RV's</h2>
        <img src={RV} alt="rv storage unit" id="rv" className="storage-unit-rv" />
        <div className="slide-info">
        <p>We are the competitive price leader in NW Arkansas</p>
        </div>
        </div>
        </div>
        <h2> and more!</h2>
        </div>

        </div>
        )
    }
};

export default Services; 