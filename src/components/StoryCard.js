import React from 'react'
import { NavLink } from 'react-router-dom'
import one from '../assets/one.png'

const StoryCard = () => {
  return (
    <div class="relative isolate flex flex-col  overflow-hidden rounded-2xl px-4 py-4  max-w-sm mx-auto mt-8 min-h-96 min-w-64"> 
        <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover"/>
            <div class="absolute inset-x-1/2 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10  text-3xl font-bold text-white">Paris</h3>
            <div class="z-10  overflow-hidden text-sm  text-gray-300">City of love klfrmklddkfdsf dmsflkdsmfdlksfmdklsmdsf jndjndjfsd  sdklfmnkldsf </div>

            <div class="py-3 sm:py-4 z-10  ">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src= {one} alt="Lana image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-white truncate">
                            Lana Byrd
                        </p>
                 
                    </div>
                </div>
            </div>
                <div class="absolute bottom-0 right-0  right z-10 mb-4 mr-4 px-4 py-2 text-white text-sm bg-orange-500 rounded-lg shadow-md">Read More </div>
       
    </div>
 )
}

export default StoryCard
