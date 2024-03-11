import React from 'react'

const Visitcard = ({memberCount , rideCount , visitCount}) => {
  return (    
    <div className="border-t border-amber-200 ">
        <div className="p-4  rounded-lg md:p-8 bg-amber-400 ">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto  sm:grid-cols-3 xl:grid-cols-3  sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{memberCount}+</dt>
                    <dd className="text-stone-900 font-semibold ">Members</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{rideCount}+</dt>
                    <dd className="text-stone-900 font-semibold  ">Rides</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{visitCount}+</dt>
                    <dd className="text-stone-900 font-semibold  ">Site Visit</dd>
                </div>
            </dl>
        </div>
    </div>
  )
}

export default Visitcard