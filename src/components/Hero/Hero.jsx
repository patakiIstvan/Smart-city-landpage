import React from 'react'
import hero1 from '../../assets/image/hero1.png'

function Hero() {
  return (
    <section style={{ backgroundImage: `url(${hero1})` }} className="section hero">
      <h1 className='title'>smart city</h1>
      <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <a href="https://verysmartcity.netlify.app">Read more</a></p>

      <div className="page__container">
        <div className="page__button active"></div>
        <div className="page__button"></div>
        <div className="page__button"></div>
      </div>
    </section>
  )
}

export default Hero