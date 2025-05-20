import React  , {useState , useEffect} from 'react'
import Logo from '../../assets/logo.png'
import add from '../../assets/add.png'
import AdminNavbar from '../../components/admin/AdminNavbar'
import AdminStoryCard from '../../components/admin/AdminStoryCard'
import { NavLink } from 'react-router-dom';
import Cycle from '../../animation/Cycle'
import StaticData from '../../utils/Global'
import { fetchAllDataFromStoryDbThatArePending } from '../../services/FirebaseFunction'

const AdminPanel = () => {
  const [isStoryLoading, setStoryLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllDataFromStoryDbThatArePending(StaticData.collectionName.storyDb);
        setStoryLoading(false);
        setStories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setStories([]);
        setStoryLoading(false);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
        <AdminNavbar/>
        <div className='mx-16 my-12'>
            <h1 className="sm:text-3xl text-2xl  title-font text-gray-900 font-extrabold">Ride Section</h1>            
            <section className = "flex w-full my-12">
      
            <NavLink exact to= "/admin-panel-add-rides" className = "w-1/2 p-12 bg-gray-300 hover:bg-gray-500 rounded-lg mx-6 flex flex-col items-center justify-center">
                     <img src={add} className="h-14 mb-2" alt="Cycle Logo"/>
                    <h1 className="text-base title-font text-gray-900 ">Add Ride</h1>      
            </NavLink>

            <NavLink exact to= "/admin-panel-all-rides" className = "w-1/2 p-12 bg-gray-300 hover:bg-gray-500 rounded-lg mx-6 flex flex-col items-center justify-center">
                     <img src={Logo} className="h-16" alt="Cycle Logo"/>    
                    <h1 className=" text-base  title-font text-gray-900 ">All Ride</h1>         
            </NavLink>

            </section>
            <h1 className="sm:text-3xl text-s  title-font  text-gray-900 font-bold">Story Section</h1>            
            <section>            
            <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-2">
                 {
                  isStoryLoading ?
                  <div className='w-full flex flex-col justify-center items-center' >                     
                    <div className="h-96 w-96 mx-32 my-32">
                      <Cycle/>
                    </div>
                  </div>
                 :
                   stories.map(story => (
                    <AdminStoryCard story = {story}/>   
                  ))
            }
            </div>
            </section>
        </div>
    </div>
  )
}

export default AdminPanel



