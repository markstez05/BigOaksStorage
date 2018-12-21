/*global google*/
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import BigOaksLarge from "../images/BigOaksPNG1.png";
import MarkerLogo from "./marker.png";

import "./map.css";

class FooterMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};
  render() {
    return (
        <div className="map-container">

            <Map
              className="mapstuff"
              google={this.props.google}
              initialCenter={{
                lat: 36.429205, 
                lng: - 94.055407
              }}
              disableDefaultUI={true}
              zoom={10}
              style={{
                marginLeft: '20px',
                marginTop: '20px',
                width: '300px',
                height: '250px',
                border: "4px solid #BA433D",
                borderRadius: "3px",
              }}
              styles= {[
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#454545"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#4D9FCA"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]}
              onClick={this.onMapClicked}
            >
          <Marker 
            //HARD CODED MARKER FOR VIEW TEST
                  onClick={this.onMarkerClick}
                  style={{height: '100px', width: '150px'}}
                  name={"Big Oaks Self-Storage"}
                  title={'Big Oaks Self-Storage'}
                  position={{lat: 36.429205, lng: - 94.055407}}
                  icon={{
                    scaledSize: new google.maps.Size(30,50),
                    url:MarkerLogo
                }}
                />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div className="infowindow">
              {/* HARD CODED USER INFO FOR VIEW TEST */}
                <img style={{height: '50px', width: '80px' }} src={ BigOaksLarge } alt="Big-Oaks-Storage-Logo" />
                <h3>Garfield, AR</h3>
                <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//14637+US-62,+Township+1,+AR/@36.4287005,-94.0576389,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87c9226c407525e9:0x82fd607edcfa1d40!2m2!1d-94.0554502!2d36.4286962">
                <button className="map-button">GET DIRECTIONS</button>
                </a>
              </div>
          </InfoWindow>
            </Map>

          </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCgH5g6dMBMsGI65zfp0Gxn8hJ_9C1DdMw")
  })(FooterMap)

