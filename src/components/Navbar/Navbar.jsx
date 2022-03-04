import React, { useState } from 'react'
import logo from '../../assets/svg/top-logo.svg'
import menuIcon from '../../assets/svg/menu-icon.svg'

function Navbar() {
  // usestates
  const [menuActive, setMenuAvtive] = useState(false);

  function toggleMenu() {
    setMenuAvtive(!menuActive);
  }

  return (
    <header className="section navbar">
      <img className="logo" src={logo} alt="logo" />
      <nav className={menuActive && 'navbar-active'}>
        <ul className='link-container'>
          <li><a href="https://verysmartcity.netlify.app">about</a></li>
          <li><a href="https://verysmartcity.netlify.app">services</a>
            <ul className='sublink-container'>
              <li><a href="https://verysmartcity.netlify.app">cms</a></li>
              <li><a href="https://verysmartcity.netlify.app">portal</a></li>
            </ul>
          </li>
          <li><a href="https://verysmartcity.netlify.app">works</a></li>
          <li><a href="https://verysmartcity.netlify.app">jobs</a></li>
        </ul>
      </nav>
      <div className={`menu-icon__container ${menuActive && 'menu-active'}`}>
        <img className="menu-icon" src={menuIcon} alt="menu icon" onClick={toggleMenu} />
      </div>
    </header>
  )
}

export default Navbar