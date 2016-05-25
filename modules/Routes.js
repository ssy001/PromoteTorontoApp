// modules/Routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import ViewTabular from './ViewTabular'
import ViewMap from './ViewMap'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={ViewTabular}/>
    <Route path="/ViewTabular" component={ViewTabular}/>
    <Route path="/ViewMap"     component={ViewMap}/>
  </Route>
)