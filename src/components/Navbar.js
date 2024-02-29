import React from 'react'
import StaticData from '../utils/Global';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import CustomButton from './CustomButton';

const Navbar = () => {
    return (
      <nav className="bg-white-400  w-full z-30 top-0 start-0  border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href={StaticData.redirectUrl} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16" alt="Cycle Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">{StaticData.companyName}</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <CustomButton buttonName = "Telegram" color="red" />
          
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink to="/" exact className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/rides" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 ">
                  Rides
                </NavLink>
              </li>
              <li>
                <NavLink to="/stories" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 ">
                  Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-amber-700 md:p-0 ">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  


