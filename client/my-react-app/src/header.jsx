import React, { useEffect } from 'react'
import './assets/css/header.css'
import CTA from './CTA'
import ME from './assets/icons_png/me.png'
import Headersocial from './Headersocial'
import Typewriter from 'typewriter-effect/dist/core';

function Header() {
  useEffect(() => {
    const twTxt = document.querySelector('.tw-txt');
    if (twTxt) {
      const typewriter = new Typewriter(twTxt, {
        loop: true,
        delay: 75,
      });

      typewriter
        .pauseFor(2500)
        .typeString('Samir Brahma')
        .pauseFor(300)
        .deleteChars(13)
        .typeString('FullStack Developer')
        .pauseFor(300)
        .deleteChars(19)
        .typeString('MERN Stack Developer')
        .pauseFor(300)
        .deleteChars(21)
        .typeString('Music Enthusiast')
        .pauseFor(1000)
        .start();
    }
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='tw-txt'></h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="me">
          <div className="neon-beam"></div>
          <img src={ME} alt="me" id='me_img' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <Headersocial />
      </div>
    </header>
  )
}

export default Header