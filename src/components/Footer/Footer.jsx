import React, { useState } from 'react'
import facebookLogo from '../../assets/svg/facebook-logo.svg';
import linkedinLogo from '../../assets/svg/linkedin-logo.svg';
import twitterLogo from '../../assets/svg/twitter-logo.svg';
import submitIcon from '../../assets/svg/submit-icon.svg';

function Footer() {
  // usestates
  const [char, setChar] = useState(0)

  const charLeft = (e) => {
    setChar(e.target.value.length)
  }

  return (
    <footer className='footer section'>
      <div className="container">
        <div className="left">
          <h3 className='title'>Mobile App Design & Development Company</h3>
          <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="icons">
            <img className="icon fb" src={facebookLogo} alt="" />
            <img className="icon in" src={linkedinLogo} alt="" />
            <img className="icon twitter" src={twitterLogo} alt="" />
          </div>
        </div>
        <div className="right">
          <h3 className='title title2'>Contact form</h3>
          <form action="">
            <div className='input-container'>
              <input className='input-field' type="text" name="fullName" id="fullName" placeholder=" " />
              <span className="floating-label">Name</span>
            </div>
            <div className='input-container'>
              <input className='input-field' type="email" name="" id="" placeholder=" " />
              <span className="floating-label">E-mail</span>
            </div>
            <div className='input-container'>
              <textarea onKeyUp={charLeft} className='input-field long-input' name="txtmsg" id="txtmsg" maxlength="200" placeholder=" "></textarea>
              <span className="floating-label">Message</span>
            </div>
            <label className='char-left' htmlFor="txtmsg">{`maximium 200 karakter - ${200 - char} maradt`}</label>
            <button id='send'>SEND<img src={submitIcon} alt="submit icon" /></button>
          </form>
        </div>
      </div>
      <p className="credit">© 2013, All rights reserved. <a href='https://ponte.hu'>Ponte.hu</a>, H-1134 Budapest, Váci út 19. - Panoráma Ház 3.em.,  Tel.: <a href='tel:3613730733'>(+36 1) 373 0733</a>,  E-mail: <a href='mailto:info@ponte.hu'>info@ponte.hu</a></p>
    </footer>
  )
}

export default Footer