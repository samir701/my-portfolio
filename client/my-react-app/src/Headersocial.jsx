import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
function Headersocial() {
  return (
    <div className="header__social">
        <a href='https://app.netlify.com/teams/samir701/projects' target='_blank'><FaLinkedin /></a>
        <a href='https://app.netlify.com/teams/samir701/projects' target='_blank'><FaGithub /></a>
        <a href='https://app.netlify.com/teams/samir701/projects' target='_blank'><SiNetlify /></a>
    </div>
  )
}

export default Headersocial