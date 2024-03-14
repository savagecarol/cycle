import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import StaticData from '../utils/Global';
import CustomButton from './CustomButton';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white-400 w-full z-30 top-0 start-0 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={StaticData.redirectUrl} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-16" alt="Cycle Logo"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">{StaticData.companyName}</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
        <a
  href= {StaticData.telegramLink}
  target="_blank"
  rel="noopener noreferrer"
>
          <CustomButton buttonName="Telegram" color="red" />
        </a>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                exact
                className={`block py-2 px-3 rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0 nav-link ${location.pathname === '/' ? 'text-amber-600 font-bold' : 'text-gray-900'}`}
              >
                Home
                {location.pathname === '/' && <span className="block h-1 bg-amber-600 mt-1"></span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rides"
                className={`block py-2 px-3 rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0 nav-link ${location.pathname === '/rides' ? 'text-amber-600 font-bold' : 'text-gray-900'}`}
              >
                Rides
                {location.pathname === '/rides' && <span className="block h-1 bg-amber-600 mt-1"></span>}
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/stories"
                className={`block py-2 px-3 rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0 nav-link ${location.pathname === '/stories' ? 'text-amber-600 font-bold' : 'text-gray-900'}`}
              >
                Stories
                {location.pathname === '/stories' && <span className="block h-1 bg-amber-600 mt-1"></span>}
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/about"
                className={`block py-2 px-3 rounded hover:bg-gray-900 md:hover:bg-transparent md:p-0 nav-link ${location.pathname === '/about' ? 'text-amber-600 font-bold' : 'text-gray-900'}`}
              >
                About
                {location.pathname === '/about' && <span className="block h-1 bg-amber-600 mt-1"></span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
