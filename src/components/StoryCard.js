import React from 'react'
import { NavLink } from 'react-router-dom'

const StoryCard = ({id , title , name , description , image}) => {
    console.log(id)
  return (
    <div className="relative isolate flex flex-col  overflow-hidden rounded-lg px-4 py-4  max-w-sm mx-auto mt-8 min-h-96 min-w-64"> 
        <img src={image} alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-x-1/2 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10  text-3xl font-bold text-white">{title}</h3>
            <div className="z-10  overflow-hidden text-sm  text-gray-200 font-semibold">{description} </div>
            <div className="py-3 sm:py-4 z-10  ">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src= "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"  />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-white truncate">
                            {name}
                        </p>
                    </div>
                </div>
            </div>
                <NavLink to= {`/stories/${id}`}  className="absolute bottom-0 right-0  right z-10 mb-4 mr-4 px-4 py-2 text-white text-sm bg-yellow-500 rounded-lg shadow-md">Read More </NavLink>
    </div>
 )
}

export default StoryCard
