import React , {useState , useEffect} from 'react'
import Cycle from '../animation/Cycle'
import CustomCarousel from '../components/CustomCrousel'
import HomeStoryCard from '../components/HomeStoryCard'
import Navbar from '../components/Navbar'
import Visitcard from '../components/Visitcard'
import {fetchAllDataFromCollection} from '../services/FirebaseFunction';
import StaticData from '../utils/Global'

const Home = () => {

  const [isBannerLoading, setBannerLoading] = useState(true);
  const [isCounterLoading, setCounterLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [counterData, setCounterData] = useState();


  useEffect(() => {

    const fetchData = async () => {
      try {
        const bannerData = await fetchAllDataFromCollection(StaticData.collectionName.bannerDb);
        const counterInfo = await fetchAllDataFromCollection(StaticData.collectionName.counterDb);
        console.log(counterInfo[0])
        setSlides(bannerData);
        setCounterData(counterInfo[0]);
        setBannerLoading(false);
        setCounterLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setSlides(StaticData.bannerCustomList);
        setBannerLoading(false);
        setCounterLoading(true);
      }
    };
  
    fetchData();

  }, []);

  return (
    <div>
        <Navbar/>   
        { isBannerLoading ? (
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

        { isCounterLoading ? (
        <div className=' flex flex-col justify-center items-center' >                     
              <div className="h-96 w-96 mx-32 my-32">
                   <Cycle/>
              </div>
        </div>
      ) : (
        <div className= 'mx-32 '>
            <Visitcard memberCount = {counterData["memberCount"]}  rideCount = {counterData["rideCount"]}   visitCount = {counterData["webSiteCount"]} />
        </div>
        )
      }

        <div className= 'mx-96 mt-32'>
                 <Cycle/>
        </div>   
       
    </div>
  )
}

export default Home