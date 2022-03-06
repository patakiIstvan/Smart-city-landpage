import React from 'react'
import hero1 from '../../assets/image/hero1.png'
import hero2 from '../../assets/image/hero2.jpg'
import hero3 from '../../assets/image/hero3.jpg'

function Hero() {
  return (
    <section className="hero">
      <div style={{ backgroundImage: `url(${hero1})` }} className="slider1 slider section">
        <div className="title__container">
          <h1 className='title'>smart city</h1>
        </div>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br /><a href="https://verysmartcity.netlify.app">Read more</a></p>

        <div className="page__container">
          <div className="page__button active"></div>
          <div className="page__button"></div>
          <div className="page__button"></div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${hero2})` }} className="slider2 slider section">
        <div className="title__container">
          <h1 className='title'>smart developers</h1>
        </div>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br /><a href="https://verysmartcity.netlify.app">Read more</a></p>

        <div className="page__container">
          <div className="page__button"></div>
          <div className="page__button active"></div>
          <div className="page__button"></div>
        </div>
      </div >
      <div style={{ backgroundImage: `url(${hero3})` }} className="slider3 slider section">
        <div className="title__container">
          <h1 className='title'>truthly inspiring</h1>
        </div>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br /><a href="https://verysmartcity.netlify.app">Read more</a></p>

        <div className="page__container">
          <div className="page__button "></div>
          <div className="page__button"></div>
          <div className="page__button active"></div>
        </div>
      </div >
    </section >
  )
}

export default Hero