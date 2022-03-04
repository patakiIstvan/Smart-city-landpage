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
          <a target="_blank" rel="noreferrer" href="https://verysmartcity.netlify.app">
            <img className="css-logo" src={cssLogo} alt="logo of CSS3" />
          </a>
        </div>
        <div className="container__item">
          <a target="_blank" rel="noreferrer" href="https://verysmartcity.netlify.app">
            <img className="html-logo" src={htmlLogo} alt="logo of HTML5" />
          </a>
        </div>
        <div className="container__item">
          <a target="_blank" rel="noreferrer" href="https://verysmartcity.netlify.app">
            <img className="java-logo" src={javaLogo} alt="logo of java" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners