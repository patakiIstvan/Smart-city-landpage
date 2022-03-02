import React from 'react'
import earthImg from '../../assets/image/earth.png'

function Introduction() {
  return (
    <section className='section introduction'>
      <div className="container">
        <h2 className='title'>Introduction</h2>
        <img src={earthImg} alt="An illustration about the earth" />
        <p>WCAG 2.0 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See Web Content Accessibility Guidelines (WCAG) Overview for an introduction and links to WCAG technical and educational material. WCAG 2.0 succeeds Web Content Accessibility Guidelines 1.0 [WCAG10], which was published as a W3C Recommendation May 1999. Although it is possible to conform either to WCAG 1.0 or to WCAG 2.0 (or both)</p>
        <div className="more">
          <a href="https://verysmartcity.netlify.app">Tovább</a>
        </div>
      </div>
      <div className="container">
        <h2 className='title'>WCAG 2.0 Layers of Guidance</h2>
        <p>WCAG 2.0 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See Web Content Accessibility Guidelines (WCAG)</p>
        <ul>
          <li><strong>Principles</strong> - At the top are four principles that provide the foundation for Web accessibility</li>
          <li><strong>Guidelines</strong> - Under the principles are guidelines.</li>
          <li><strong>Sufficient and Advisory Techniques</strong> - For each of the guidelines and success criteria in the WCAG 2.0 document itself</li>
        </ul>
        <p>WCAG 2.0 succeeds Web Content Accessibility Guidelines 1.0 [WCAG10], which was published as a W3C Recommendation May 1999. Although it is possible to conform either to WCAG 1.0 or to WCAG 2.0 (or both)</p>
        <div className="more">
          <a href="https://verysmartcity.netlify.app">Tovább</a>
        </div>
      </div>
    </section>
  )
}

export default Introduction