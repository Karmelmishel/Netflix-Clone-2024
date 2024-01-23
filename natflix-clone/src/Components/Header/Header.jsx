import React from 'react'
import './Header.css'
import logo from '../../assets/Logos-Readability-Netflix-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header container'>
      <div className='header__container row'>
        <div className='header__left  col-sm-12  col-md-8 '>
          <ul>
            <li><img src={logo} alt="Nitflix logo" width="100" /></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header__right  col-sm-12  col-md-4 '>
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
