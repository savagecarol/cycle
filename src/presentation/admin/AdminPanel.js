import React from 'react'
import Logo from '../../assets/logo.png'
import add from '../../assets/add.png'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminStoryCard from '../../components/admin/AdminStoryCard'

const AdminPanel = () => {
    const stories   = [1 , 2 , 3 , 4 , 5 , 6]
  return (
    <div>
        <AdminNavbar/>
        <div className='mx-16 my-12'>
            <h1 className="sm:text-3xl text-2xl  title-font text-gray-900 font-extrabold">Ride Section</h1>            
            <section class = "flex w-full my-12">
            <div class = "w-1/2 p-12 bg-gray-300 hover:bg-gray-500 rounded-lg mx-6 flex flex-col items-center justify-center">
                     <img src={add} className="h-14 mb-2" alt="Cycle Logo"/>
                    <h1 className="text-base title-font text-gray-900 ">Add Ride</h1>      
            </div>
            <div class = "w-1/2 p-12 bg-gray-300 hover:bg-gray-500 rounded-lg mx-6 flex flex-col items-center justify-center">
                     <img src={Logo} className="h-16" alt="Cycle Logo"/>    
                    <h1 className=" text-base  title-font text-gray-900 ">All Ride</h1>         
            </div>
            </section>
            <h1 className="sm:text-3xl text-s  title-font  text-gray-900 font-bold">Story Section</h1>            
            <section>            
            <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-2">
                 {stories.map(story => (
            <AdminStoryCard />   
            ))}
            </div>
            </section>
        </div>
    </div>
  )
}

export default AdminPanel