// modules/ViewMap.js
import React from 'react'
import Map from './Map'


export default React.createClass({
	componentDidMount(){
    this.getPlaces();
  },
  
  getPlaces(){
    var placesURL = "./places.json";
    var placesObj = [];
    var timeout = 2000;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.ontimeout = function () {
        console.error("The request for " + placesURL + " timed out.");
    };
    xmlhttp.onload = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        placesObj = JSON.parse(xmlhttp.responseText);
        this.setState({
          places: placesObj
        });
      }
      else {
        console.error(xmlhttp.statusText);
      }
    };
    xmlhttp.open("GET", placesURL, true);  //asynchronous call
    xmlhttp.timeout = timeout;
    xmlhttp.send();
  },

  render() {
    return (
      <div>
        ViewMap
        <Map places={this.state.placesObj} />
      </div>
    )
  }
})

