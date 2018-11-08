import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Home from './components/page/home'
import TestPath from './components/page/testpath'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/test' component={TestPath} />
            <Redirect to='/' />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}
