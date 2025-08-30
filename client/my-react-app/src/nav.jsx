import React from 'react'
import './assets/css/nav.css'
import { CiHome } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { LiaServicestack } from "react-icons/lia";
import { IoMdContact } from "react-icons/io";
function nav() {
  return (
    <nav>
      <a href="#" className='active'><CiHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#experience"><FaBookOpen /></a>
      <a href="#services"><LiaServicestack /></a>
      <a href="#contact"><IoMdContact /></a>
    </nav>
  )
}

export default nav