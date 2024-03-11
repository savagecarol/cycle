import React from 'react'
import Navbar from '../components/Navbar'
import RideCard from '../components/RideCard';


const Rides = () => {
    const old = [1 , 2 , 3, 4 , 5];
    const upcome = [1 , 2];

  return (
    <div>
    <Navbar/>
    <div className = 'mx-16 my-16'>
        <div className = 'text-lg subpixel-antialiased font-bold'>Upcoming rides </div>
        {
            upcome.map(upComing => (

                    <div className="mt-8">
                    <RideCard  />
                    </div>
                  
            ))
        }
            
        <div className = 'text-lg subpixel-antialiased font-bold mt-8'>Old rides</div>
            {
                old.map(old => (

                    <div className="mt-8">
                    <RideCard  />
                    </div>

             ))
        }
    </div>
    </div>
  )
}

export default Rides