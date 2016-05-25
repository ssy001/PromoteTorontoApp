// modules/ViewTabular.js
import React from 'react'

var PlacesTable = React.createClass({
  render() {
    var rows = [];
    console.log("---STS---> " + this.props.places);
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
/*
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
*/
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
        <PlacesTable places={this.state.places}/>
      </div>
    )
  }
})
