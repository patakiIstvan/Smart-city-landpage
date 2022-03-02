import React from 'react'
import logo from '../../assets/svg/top-logo.svg'

function Navbar() {
  return (
    <header className="section navbar">
      <img className="logo" src={logo} alt="" />
      <nav>
        <ul>
          <li><a href="https://verysmartcity.netlify.app">about</a></li>
          <li><a href="https://verysmartcity.netlify.app">services</a>
            <ul>
              <li><a href="https://verysmartcity.netlify.app">cms</a></li>
              <li><a href="https://verysmartcity.netlify.app">portal</a></li>
            </ul>
          </li>
          <li><a href="https://verysmartcity.netlify.app">works</a></li>
          <li><a href="https://verysmartcity.netlify.app">jobs</a></li>
        </ul>
      </nav>
      <img src="" alt="" />
    </header>
  )
}

export default Navbar