import React from 'react'

function Footer() {
  return (
    <footer className='footer section'>
      <div className="container">
        <div className="left">
          <h3>Mobile App Design & Development Company</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="icons">
            <img className="icon" src="" alt="" />
            <img className="icon" src="" alt="" />
            <img className="icon" src="" alt="" />
          </div>
        </div>
        <div className="right"></div>
        <h3>Contact form</h3>
        <form action="">
          <input type="text" name="fullName" id="fullName" />
          <input type="email" name="" id="" />
          <textarea name="txtmsg" id="txtmsg" cols="30" rows="10"></textarea>
          <label htmlFor="txtmsg">maximium 200 karakter - 200 maradt</label>
          <button>SEND <img src="" alt="" /></button>
        </form>
      </div>
      <p className="credit">© 2013, All rights reserved. Ponte.hu, H-1134 Budapest, Váci út 19. - Panoráma Ház 3.em.,  Tel.: (+36 1) 373 0733,  E-mail: info@ponte.hu  </p>
    </footer>
  )
}

export default Footer