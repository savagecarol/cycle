import React from 'react'
import Navbar from '../components/Navbar'


const Rides = () => {
  return (
    <div>
    <Navbar/>
    <div class = 'mx-16 my-16'>
        <div class = 'text-lg subpixel-antialiased font-bold'>Upcoming rides </div>
        
        <div class = 'text-lg subpixel-antialiased font-bold'>Old rides</div>
    </div>
    </div>
  )
}

export default Rides