import React from 'react'

export default React.createClass({
  
	componentDidMount(){
		// Only componentDidMount is called when the component is first added to
		// the page. This is why we are calling the following method manually. 
		// This makes sure that our map initialization code is run the first time.
		this.componentDidUpdate();
	},

	componentDidUpdate(){
    console.log("Map.js - console did update");
		var map = new GMaps({
			el: '#map',
			lat: 43.6532,
			lng: -79.3832
		});
    this.props.places.forEach( (data) => {
      console.log(data.lat + ", " + data.lng + ", " + data.title + ", " + data.url);
      // Adding a marker to the location we are showing
      map.addMarker({
        lat: data.lat,
        lng: data.lng,
        title: data.title,
        click: function(e) {
          window.open(data.url);
        }
      });
    });
	},

	render(){
		return (
			<div className="map-holder">
				<p>Loading...</p>
				<div id="map">Where's the map?</div>
			</div>
		);
	}  
})