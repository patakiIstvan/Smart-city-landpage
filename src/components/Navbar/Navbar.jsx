import React, { useState } from 'react'
import logo from '../../assets/svg/top-logo2.svg'
import menuIcon from '../../assets/svg/menu-icon.svg'

function Navbar() {
  // usestates
  const [menuActive, setMenuAvtive] = useState(false);

  function toggleMenu() {
    setMenuAvtive(!menuActive);
  }

  return (
    <header className="navbar">
      <div className="container section">
        <img className="logo" src={logo} alt="logo" />
        <nav className='large-screen-nav'>
          <ul className='link-container'>
            <li><a href="https://verysmartcity.netlify.app">about</a></li>
            <li className='sub-choose'><a href="https://verysmartcity.netlify.app">services</a>
              <ul className='ls-sublink-container'>
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
      </div>
      <div className={`mobile-menu ${menuActive && 'menu-links-active'}`}>
        <ul className='link-container'>
          <li className="section"><a href="https://verysmartcity.netlify.app">about</a></li>
          <li className="section"><a href="https://verysmartcity.netlify.app">services</a></li>
          <li className='mobile-sublink section'><a href="https://verysmartcity.netlify.app">cms</a></li>
          <li className='mobile-sublink section'><a href="https://verysmartcity.netlify.app">portal</a></li>
          <li className="section"><a href="https://verysmartcity.netlify.app">works</a></li>
          <li className="section"><a href="https://verysmartcity.netlify.app">jobs</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar