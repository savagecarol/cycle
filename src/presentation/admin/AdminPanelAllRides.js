import React from 'react'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminPanelRideCard from '../../components/admin/AdminPanelRideCard';


const AdminPanelAllRides = () => {
  const upcome = [1 , 2];
  return (
    <div>
    <AdminNavbar/>
    <div className = 'mx-16 my-16'>
        <div className = 'text-lg subpixel-antialiased font-bold'>All rides </div>
        {
            upcome.map(upComing => (

                    <div className="mt-8">
                    <AdminPanelRideCard  />
                    </div>
                  
            ))
        }
        </div>
        </div>
  )
}

export default AdminPanelAllRides