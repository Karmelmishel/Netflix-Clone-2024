import React, { useState } from 'react'
import logo from "../../assets/Logos-Readability-Netflix-logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const NavBars = () => {
  const [sideBar, setSideBar]=useState(false)
  
  return (
    <header className=' bg-black opacity-75 w-full h-[4rem] fixed'>
    <nav className=' flex justify-between items-center w-[92%] text-white mx-auto ' >
        <div>
      <img className='   logo w-[7rem] md:w-[9rem]' src={logo} alt="" />
      </div>
      <div className=' md:static absolute md:min-h-fit min-h-[60vh] left-0  w-full flex items-center'>
      <ul className=' flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-5 '>
              <li ><a className='hover:text-gray-500 hidden lg:block' href="">Home</a></li>
              <li><a className='hover:text-gray-500 hidden lg:block' href="">TVShows</a></li>
              <li><a className='hover:text-gray-500 hidden lg:block' href="">Movies</a></li>
              <li><a className='hover:text-gray-500 hidden lg:block' href="">Latest</a></li>
              <li><a className='hover:text-gray-500 hidden lg:block' href="">MyList</a></li>
              <li><a className='hover:text-gray-500 hidden lg:block' href="">Browse by Languages</a></li>
            </ul>
      </div>
      <div className='flex justify-between gap-5 items-center'>
        <SearchIcon/>
        <NotificationsNoneIcon/>
        <AccountBoxIcon/>
        <li className=' list-none' onClick={()=>setSideBar(true)}>
        <ArrowDropDownIcon   />
        </li>
        
      </div>
    </nav>
    </header>
  )
}

export default NavBars
