import React from 'react'
import cssLogo from '../../assets/svg/css-logo.svg';
import htmlLogo from '../../assets/svg/html-logo.svg';
import javaLogo from '../../assets/svg/java-logo.svg';

function Partners() {
  return (
    <section className='partners section'>
      <h2 className="title">Our partners</h2>
      <div className="container">
        <div className="container__item">
          <img className="css-logo" src={cssLogo} alt="logo of CSS3" />
        </div>
        <div className="container__item">
          <img className="html-logo" src={htmlLogo} alt="logo of HTML5" />
        </div>
        <div className="container__item">
          <img className="java-logo" src={javaLogo} alt="logo of java" />
        </div>
      </div>
    </section>
  )
}

export default Partners