import React  , {useState , useEffect} from 'react'
import Cycle from '../animation/Cycle';
import Navbar from '../components/Navbar'
import RideCard from '../components/RideCard';
import { fetchAllDataFromCollection } from '../services/FirebaseFunction';
import StaticData from '../utils/Global';


const Rides = () => {

  const [isRidesLoading, setRidesLoading] = useState(true);
  const [oldRides, setOldRides] = useState([]);
  const [upcomingRides, setUpcomingRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllDataFromCollection(StaticData.collectionName.rideDb);
  
  
        // Get the current date and time
        const currentDateTime = new Date();
  
        // Separate the fetched rides into old and upcoming based on dateTime
        const oldRidesList = [];
        const upcomingRidesList = [];
  
        data.forEach(ride => {
          const rideDateTime = new Date(ride.dateTime);
          if (rideDateTime > currentDateTime) {
            upcomingRidesList.push(ride);
          } else {
            oldRidesList.push(ride);
          }
        });
  
        // Set the state variables with the separated lists
        setOldRides(oldRidesList);
        setUpcomingRides(upcomingRidesList);
        setRidesLoading(false);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setOldRides([]);
        setUpcomingRides([]);
        setRidesLoading(false);
      }
    };
    fetchData();
  }, []);
  


  return (
<div>
  <Navbar />
  <div className='mx-16 my-16'>
    {
      isRidesLoading ? 
      (
        <div className='flex flex-col justify-center items-center'>
          <div className="h-96 w-96 mx-32 my-32">
            <Cycle />
          </div>
        </div>
      ) : (
        <>
          <div className='text-lg subpixel-antialiased font-bold'>Upcoming Rides</div>
          {
            upcomingRides.map(ride => (
              <div className="mt-8">
                <RideCard ride={ride} />
              </div>
            ))
          }
          <div className='text-lg subpixel-antialiased font-bold mt-8'>Old Rides</div>
          {
            oldRides.map(ride => (
              <div className="mt-8">
                <RideCard ride={ride} />
              </div>
            ))
          }
        </>
      )
    }
  </div>
</div>

  )
}

export default Rides