import React , {useState , useEffect} from 'react'
import Cycle from '../animation/Cycle'
import CustomCarousel from '../components/CustomCrousel'
import HomeStoryCard from '../components/HomeStoryCard'
import Navbar from '../components/Navbar'
import Visitcard from '../components/Visitcard'
import {addDocumentToCollectionWithDocId, fetchAllDataFromCollection, getDocumentById} from '../services/FirebaseFunction';
import StaticData from '../utils/Global'
import toast , {  Toaster } from 'react-hot-toast';

const Home = () => {

  const [isBannerLoading, setBannerLoading] = useState(true);
  const [isCounterLoading, setCounterLoading] = useState(true);
  const [slides, setSlides] = useState([]);
  const [counterData, setCounterData] = useState();
  const [email, setEmail] = useState("");



  const handleSubmit = async (event) => {

    event.preventDefault();
    if (!email || email === "") {
      toast.error('Please fill in all the fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address' , { duration: 500 });
    }


    try{
      if(await getDocumentById(StaticData.collectionName.newsLetterDb, email)==null){
         await addDocumentToCollectionWithDocId(StaticData.collectionName.newsLetterDb, {email : email} , email);
         toast.success("Thanks!!"  , {duration : 10000})
        } 
   else {
     toast.error('Already Added in NewsLetter!!' , { duration: 10000 });
  }} catch(e){
    toast.error('Something went wrong!!' , { duration: 10000 });
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerData = await fetchAllDataFromCollection(StaticData.collectionName.bannerDb);
        const counterInfo = await fetchAllDataFromCollection(StaticData.collectionName.counterDb);
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

<form className="mx-32 flex items-center mt-12" onSubmit={handleSubmit}>
  <div className="flex-grow mb-5">
    <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">For Upcoming Rides!</label>
    
    <p className="block mb-2 text-m font-medium text-gray-900">
      {StaticData.newsletterText}
    </p>
   

    <div className="flex items-center">
      <input 
          type="email" 
          name="email" 
          value={email || ""} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" 
          required 
      />
      <button type="submit" className="ml-2 text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5">Submit</button>
    </div>
  </div>
</form>

        <div className= 'mx-64 mt-32'>
                 <Cycle/>
        </div>   
        <Toaster position='top-right' />
    </div>
  )
}

export default Home