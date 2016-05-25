// modules/App.js
import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Points of Interest in Toronto</h1>
        <ul role="nav">
          <li><NavLink to="/ViewTabular">ViewTabular</NavLink></li>
          <li><NavLink to="/ViewMap">ViewMap</NavLink></li>
          <li><NavLink to="/ViewMapBixi">ViewMapBixi</NavLink></li>
        </ul>        
        {this.props.children}
      </div>
    )
  }
})


