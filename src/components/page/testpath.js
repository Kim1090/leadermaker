import React from 'react'
import { Link } from 'react-router-dom'

import Controller from '../../libs/controller'
import '../../styles/App.css'

export default class TestPath extends Controller {
  render () {
    return (
      <div className='test-path'>
        <p>come to test path correct</p>
        <Link to='/'>back to home</Link>
      </div>
    )
  }
}
