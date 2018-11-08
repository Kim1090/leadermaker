import React from 'react'

import Controller from '../../libs/controller'
import logo from '../../logo.svg'
import '../../styles/App.css'
import { Link } from 'react-router-dom'

export default class Home extends Controller {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to='/test'>
            Learn React
          </Link>
        </header>
      </div>
    )
  }
}
