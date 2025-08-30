import React from 'react'
import './assets/css/header.css'
import CTA from './CTA'
import ME from './assets/icons_png/me.png'
import Headersocial from './Headersocial'
function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Samir Brahma</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <Headersocial />
      </div>
      

    </header>
  )
}

export default header