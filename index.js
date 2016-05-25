import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
// import routes and pass them into <Router/>
import App from './modules/App'
import ViewTabular from './modules/ViewTabular'
import ViewMap from './modules/ViewMap'
import ViewMapBixi from './modules/ViewMapBixi'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ViewTabular}/>
      <Route path="/ViewTabular" component={ViewTabular}/>
      <Route path="/ViewMap"     component={ViewMap}/>
      <Route path="/ViewMapBixi" component={ViewMapBixi}/>
    </Route>
  </Router>
), document.getElementById('app'))
