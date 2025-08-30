import React from 'react'
import './assets/css/nav.css'
import { CiHome } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { LiaServicestack } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';
function nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'? 'active':''}><CiHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'? 'active':''}><FaUserAlt /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'? 'active':''}><FaBookOpen /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services'? 'active':''}><LiaServicestack /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    </nav>
  )
}

export default nav