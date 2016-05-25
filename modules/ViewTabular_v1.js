// modules/ViewTabular.js
import React from 'react'

var PlacesTable = React.createClass({
  render() {
    var rows = [];
    this.props.places.forEach( (data) => {
      rows.push(<PlacesDataRow data={data} key={data.url}/> ); 
    });
    
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>lng</th>
            <th>lat</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var PlacesCategoryRow = React.createClass({
  render() {
    return (
      <tr>
      <th>{this.props.category.title}</th>
      <th>{this.props.category.lng}</th>
      <th>{this.props.category.lat}</th>
      <th>{this.props.category.url}</th>
      </tr>
    );
  }  
});

var PlacesDataRow = React.createClass({
  render() {
    return (
      <tr>
      <td>{this.props.data.title}</td>
      <td>{this.props.data.lng}</td>
      <td>{this.props.data.lat}</td>
      <td>{this.props.data.url}</td>
      </tr>    
    );
  }    
});

var placesObj = [];

export default React.createClass({
  tick() {
    if (this.state.timeLeft < 0) {
      
    }else {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    }    
  },
  
  getInitialState() {
    return { timeLeft: 2 };
  },
  
  getPlaces(){
    var placesURL = "./places.json";
    var timeout = 2000;
    xmlhttp.ontimeout = function () {
        console.error("The request for " + placesURL + " timed out.");
    };
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        placesObj = JSON.parse(xmlhttp.responseText);
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
    this.getPlaces();
    return (
      <div>     
        <PlacesTable places={placesObj}/>
      </div>
    )
  }
})
