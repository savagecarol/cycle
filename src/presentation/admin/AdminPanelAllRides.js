import React, { useEffect, useState } from 'react'
import Cycle from '../../animation/Cycle';
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminPanelRideCard from '../../components/admin/AdminPanelRideCard';
import { fetchAllDataFromCollection } from '../../services/FirebaseFunction';
import StaticData from '../../utils/Global';


const AdminPanelAllRides = () => {
  

  const [isRidesLoading, setRidesLoading] = useState(true);
  const [rides, setRides] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllDataFromCollection(StaticData.collectionName.rideDb);
        setRidesLoading(false);
        setRides(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setRides([]);
        setRidesLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    <AdminNavbar/>
    <div className = 'mx-16 my-16'>
        <div className = 'text-lg subpixel-antialiased font-bold'>All rides </div>
        {

          isRidesLoading ?
                  <div className='w-full flex flex-col justify-center items-center' >                     
                    <div className="h-96 w-96 mx-32 my-32">
                      <Cycle/>
                    </div>
                  </div>
                  :
          rides.map(ride => (
                    <div className="mt-8">
                    <AdminPanelRideCard  ride = {ride}
                    />
                    </div>
                  
            ))
        }
        </div>
        </div>
  )
}

export default AdminPanelAllRides