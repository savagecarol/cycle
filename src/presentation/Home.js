import React , {useState , useEffect} from 'react'
import Cycle from '../animation/Cycle'
import CustomCarousel from '../components/CustomCrousel'
import HomeStoryCard from '../components/HomeStoryCard'
import Navbar from '../components/Navbar'
import Visitcard from '../components/Visitcard'
import {fetchAllDataFromCollection} from '../services/FirebaseFunction';
import StaticData from '../utils/Global'

const Home = () => {

  const [isLoading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchAllDataFromCollection(StaticData.collectionName.bannerDb);
        setSlides(data);
        setSlides(StaticData.bannerCustomList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setSlides(StaticData.bannerCustomList);
        setLoading(false);
      }
    };
  
    fetchData();

  }, []);

  return (
    <div>
        <Navbar/>   
        { isLoading ? (
        <div className=' flex flex-col justify-center items-center' >                     
              <div className="h-96 w-96 mx-32 my-32">
                   <Cycle/>
              </div>
        </div>
      ) : (
          <CustomCarousel slides = {slides} />
        )
      }

        <HomeStoryCard/>     
        <div className= 'mx-32 '>
            <Visitcard/>
        </div>
        <div className= 'mx-96 mt-32'>
                 <Cycle/>
        </div>   
       
    </div>
  )
}

export default Home