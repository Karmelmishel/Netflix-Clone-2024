import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div className='footer__data'>
          <div>
            <ul>
            <li>Audio Description</li>
            <li>Investor Relation</li>
            <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of User</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='service__code'>
          <p>Service Code</p>
        </div>
        <div className='copy__write'>
          &copy; 1997.2024 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer
