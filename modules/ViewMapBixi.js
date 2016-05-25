// modules/ViewMapBixi.js
import React from 'react'
import MapBixi from './MapBixi'

export default React.createClass({
  getInitialState: function() {
    return {
      places: []
    };
  },
  
	componentDidMount(){
    console.log("ViewMapBixi.js - console did mount");
    this.serverRequest = $.ajax({
      type: 'GET',
      url: "http://feeds.bikesharetoronto.com/stations/stations.json",
      //url: "http://www.bikesharetoronto.com/stations/json",
      crossDomain: true,
      cache: false,
      success: function(result) {
        console.log("<---"+result+"--->");
        var res = JSON.parse(result);
        this.setState({
          places: res.stationBeanList
        });     
      }.bind(this)
    });
/*
    this.serverRequest = $.get("http://www.bikesharetoronto.com/stations/json", function (result) {
      console.log("<---"+result+"--->");
      var res = JSON.parse(result);
      this.setState({
        places: res.stationBeanList
      });
    }.bind(this));
*/    
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    return (
      <div>
        ViewMapBixi
        <MapBixi places={this.state.places} />
      </div>
    )
  }
})
