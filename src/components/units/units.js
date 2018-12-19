import React, { Component } from 'react';
import BigOaksLarge from "../images/BigOaksPNG1.png";
import UnitSize from "../images/UnitSize.png";
import UnitSize1 from "../images/UnitSize1.png";
import UnitSize2 from "../images/UnitSize2.png";
import UnitSize3 from "../images/UnitSize3.png";
import UnitSize4 from "../images/UnitSize4.png"
import './units.css';

class Units extends Component {
  constructor(props){
    super();
    this.state = {
        price: "",
        size: "",
        floorSpace: "",
        doorSize: "",
        modal: null,
        picture: null,
    }
}
componentDidMount = () =>{
}

  render() {
    let modal = null;
    let picture = null;
    if (this.state.modal=== true) {
      modal = (
        <div
          className="modal"
          onClick={() => {
            this.setState({
              modal: false,
              price: "",
              size: "",
              floorSpace: "",
              doorSize: ""
            });
          }}
        >
        <div className="modal-info">
        <img src={BigOaksLarge} alt="big oaks storage logo" className="big-oaks-modal" />
        <div className="modal-title">
        <h3>Price: </h3>
        <h3>Size: </h3>
        <h3>Floor Space: </h3>
        <h3>Door Size: </h3>
        </div>
        <div className="state-value">
        <h3>{this.state.price}</h3>
        <h3>{this.state.size}</h3>
        <h3> {this.state.floorSpace}</h3>
        <h3> {this.state.doorSize}</h3>
        </div>
        </div>
        <h1> Call
        <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:1-555-555-5555"
              > 555-555-5555</a> To Reserve</h1>
        </div>
      );
          } else {
          picture = (
            <div className="picture-modal">
            <img src={BigOaksLarge} alt="big oaks storage logo" className="big-oaks-logo" />
            <h2>Premier, climate control, self-storage units conveniently located in Northwest Arkansas.</h2>
            </div>
          )
        }
    return (
      <div className="unit-container">
      <div className="display-container">
      <div className="unit-display">
      <div>{modal}</div>
      <div>{picture}</div>
      </div>
       <div className="price-card-div1">

        <h2>UNITS & PRICING</h2>
        <div className="bar"></div>
        
        <div 
        onClick={() => {
          this.setState({
            modal: !this.state.modal,
            price: "$50 per month",
            size: " 12' x 10'",
            floorSpace: "120 sq. ft.",
            doorSize: "10' x 10'"
          });
        }}
        className="price-card-alt">
        <img src={ UnitSize } alt="Storage Unit Size" className="unit-size1" />
        <p><strong>$50</strong> per month</p>
        <div className="price-list2">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>120 sq. ft.</p>
            <p>10' x 10'</p>
        </div>
        </div>
      
        </div>
        <div 
        onClick={() => {
          this.setState({
            modal: !this.state.modal,
            price: "$60 per month",
            size: " 12' x 15'",
            floorSpace: "180 sq. ft.",
            doorSize: "10' x 10'"
          });
        }}
        className="price-card-alt">
        <img src={ UnitSize1 } alt="Storage Unit Size" className="unit-size1" />
        <p><strong>$60</strong> per month</p>
        <div className="price-list2">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>180 sq. ft.</p>
            <p>10' x 10'</p>
        </div>
        </div>
      
        </div>
        <div 
            onClick={() => {
              this.setState({
                modal: !this.state.modal,
                price: "$75 per month",
                size: " 12' x 20'",
                floorSpace: "240 sq. ft.",
                doorSize: "10' x 10'"
              });
            }}
        className="price-card-alt">
        <img src={ UnitSize2 } alt="Storage Unit Size" className="unit-size1" />
        <p><strong>$75</strong> per month</p>
        <div className="price-list2">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>240 sq. ft.</p>
            <p>10' x 10'</p>
        </div>
        </div>
        </div>
        <div 
            onClick={() => {
              this.setState({
                modal: !this.state.modal,
                price: "$90 per month",
                size: " 12' x 30'",
                floorSpace: "360 sq. ft.",
                doorSize: "10' x 10'"
              });
            }}
        className="price-card-alt">
        <img src={ UnitSize3 } alt="Storage Unit Size" className="unit-size1" />
        <p><strong>$90</strong> per month</p>
        <div className="price-list2">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>360 sq. ft.</p>
            <p>10' x 10'</p>
        </div>
        </div>
        </div>
        <div 
            onClick={() => {
              this.setState({
                modal: !this.state.modal,
                price: "$160 per month",
                size: " 14' x 40'",
                floorSpace: "560 sq. ft.",
                doorSize: "12' x 14"
              });
            }}
        className="price-card-alt">
        <img src={ UnitSize4 } alt="Storage Unit Size" className="unit-size1" />
        <p><strong>$160</strong> per month</p>
        <div className="price-list2">
        <div className="cost-title">
        <p>Floor Space:</p>
        <p>Door Size:</p>
        </div>
        <div className="cost-value">
            <p>560 sq. ft.</p>
            <p>12' x 14'</p>
        </div>
        </div>
        </div>
        <div 
            onClick={() => {
              this.setState({
                modal: !this.state.modal,
                price: "$30 per month",
                size: "Outside Parking",
                floorSpace: "Parking",
                doorSize: "Parking"
              });
            }}
        className="price-card-alt">
        <img src={ UnitSize3 } alt="Storage Unit Size" className="unit-size1" />
        <p><strong>$30</strong> per month</p>
        <div className="price-list2">
        <div className="cost-title">
        <p>Outside Trailer:</p>
        <p>RV:</p>
        </div>
        <div className="cost-value">
            <p>Parking</p>
            <p>Parking</p>
        </div>
        </div>
        </div>
        </div>
        
        </div>
        
      </div>
    );
  }
}

export default Units;