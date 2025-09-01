import React from 'react'
import './assets/css/about.css'
import ME from './assets/icons_png/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { TbFoldersFilled } from "react-icons/tb";

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />

          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article  className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article  className='about__card'>
              <FaUserFriends  className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article  className='about__card'>
              <TbFoldersFilled className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Compleated projects</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default about