import React from 'react'

const AdminStoryCard = () => {
  return (

        <div className="relative isolate flex flex-col  overflow-hidden rounded-lg px-4 py-4  max-w-sm mx-auto mt-8 min-h-96 min-w-64"> 
            <img src="https://dummyimage.com/420x260" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
                <div className="absolute inset-x-1/2 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10  text-3xl font-bold text-white">Paris</h3>
                <div className="z-10  overflow-hidden text-sm  text-gray-200 font-semibold">City of love klfrmklddkfdsf dmsflkdsmfdlksfmdklsmdsf jndjndjfsd  sdklfmnkldsf </div>
                <div className="py-3 sm:py-4 z-10  ">
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src= "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="Lana image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-white truncate">
                                Lana Byrd
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0  right z-10 mb-4 ml-4 px-4 py-2 text-white text-sm bg-green-500 rounded-lg shadow-md">Accept </div>
                <div className="absolute bottom-0 left-1/3 right-1/3  right z-10 mb-4 mr-8  px-6 py-2 text-white text-sm bg-red-500 rounded-lg shadow-md">Reject </div> 
                    <div className="absolute bottom-0 right-0  right z-10 mb-4 mr-4 px-4 py-2 text-white text-sm bg-yellow-500 rounded-lg shadow-md">Read More </div>
        </div>
  )
}

export default AdminStoryCard


