import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'react-bootstrap'
import App from './containers/App'
import List from './components/List'
import Ball from './components/Ball'
import Graph from './components/Graph'
import './styles/app.css'
import configureStore from './store/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={List}/>
        <Route path='graph'component={Graph}/>
        <Route path='ball'component={Ball}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
