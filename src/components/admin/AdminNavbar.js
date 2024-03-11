import React from 'react'
import Logo from '../../assets/logo.png'
import StaticData from '../../utils/Global'
import { logOut } from '../../services/FirebaseFunction' 
import { useNavigate } from 'react-router-dom';
import toast ,  { Toaster } from 'react-hot-toast';



const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    if(logOut())
    {
      navigate('/login');
      toast.error("Successfully Logged Out"  , {duration : 500})
    }
    else
     toast.error("Error in logging out"  , {duration : 500})
  }

  return (
    <nav className="bg-white-400  w-full z-30 top-0 start-0  border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href={StaticData.redirectUrl} className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-16" alt="Cycle Logo"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">{StaticData.companyName}</span>
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" className="text-white bg-red-600 hover:bg-red-800  font-medium rounded-lg text-sm px-4 py-2 text-center " onClick={handleLogOut}>Logout</button>
    
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      </div>
    </div>
    <Toaster position='top-right'/>
  </nav>
  )
}

export default AdminNavbar