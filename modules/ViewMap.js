// modules/ViewMap.js
import React from 'react'
import Map from './Map'

export default React.createClass({
  getInitialState: function() {
    return {
      places: []
    };
  },
  
	componentDidMount(){
    this.serverRequest = $.get("./places.json", function (result) {
      this.setState({
        places: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render() {
    return (
      <div>
        ViewMap
        <Map places={this.state.places} />
      </div>
    )
  }
})

