import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
const Footer = () => {
  return (
    <footer>
      <h4>Done by Divanshu Kachhawa</h4>
      
      <div className='footerLinks'>
        <a href="https://github.com/Divanshu17" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/divanshu-kachhawa-32442b240/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:divanshu1704@gmail.com' target='_blank'><GrMail/></a>
       
      </div>
    </footer>
  )
}

export default Footer