import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'




function Footer() {
  return (
    <div className='footer container-landing'>
        <div className='socialMedia'>
            <FaTwitter className='m-3'/>
            <a className="socialMedia" href="https://www.facebook.com/socialhackersacademy/"  target="blank"><FaFacebook className='m-3'/></a>
            <FaInstagram className='m-3'/>
            <a className="socialMedia" href="https://github.com/Brigitta-Nagy" target="blank">
              <FaGithub />
            </a>
            
        </div>
        <p>&copy; M-A-M Brigitta 2022</p>
        <p>All this wouldn't be possible without SHA</p>
    </div>
  )
}

export default Footer