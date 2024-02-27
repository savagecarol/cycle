import React from 'react'
import Logo from '../../assets/logo.png'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminStoryCard from '../../components/admin/AdminStoryCard'


const AdminPanel = () => {
    const stories   = [1 , 2 , 3 , 4 , 5 , 6]
  return (
    <div>
        <AdminNavbar/>
        <div className='mx-16 my-12'>
            <h1 class="sm:text-3xl text-2xl  title-font text-gray-900 font-extrabold">Ride Section</h1>            
            <section>
            

            </section>
            <h1 class="sm:text-3xl text-2xl  title-font  text-gray-900 font-bold">Story Section</h1>            
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