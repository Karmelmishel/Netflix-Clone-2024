import React from 'react'
import logo from "../../assets/Logos-Readability-Netflix-logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavBars = () => {
  return (
    <header className=' bg-black opacity-75 w-full fixed'>
    <nav className=' flex justify-between items-center w-[92%] text-white mx-auto' >
        <div>
      <img className='  logo w-36' src={logo} alt="" />
      </div>
      <div className=' md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-500%] w-full flex items-center'>
      <ul className=' flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-5 '>
              <li ><a className='hover:text-gray-500' href="">Home</a></li>
              <li><a className='hover:text-gray-500' href="">TVShows</a></li>
              <li><a className='hover:text-gray-500' href="">Movies</a></li>
              <li><a className='hover:text-gray-500' href="">Latest</a></li>
              <li><a className='hover:text-gray-500' href="">MyList</a></li>
              <li><a className='hover:text-gray-500' href="">Browse by Languages</a></li>
            </ul>
      </div>
      <div className='flex justify-between gap-5 items-center'>
        <SearchIcon/>
        <NotificationsNoneIcon/>
        <AccountBoxIcon/>
        <ArrowDropDownIcon/>
      </div>
    </nav>
    </header>
  )
}

export default NavBars
