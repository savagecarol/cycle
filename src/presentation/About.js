import React , {useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import Blob from '../assets/blob.svg'
import {getDocumentById} from '../services/FirebaseFunction';
import StaticData from '../utils/Global';
import Cycle from '../animation/Cycle';
import SEO from '../components/SEO';

const About = () => {
    const [isDataLoading, setDataLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const aboutData = await getDocumentById(StaticData.collectionName.aboutDb , StaticData.aboutDocument);
            setData(aboutData);
            console.log(aboutData);
            setDataLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setDataLoading(true);
          }
        };
      
        fetchData();
      }, []);



  return (
    <div> 
         <SEO title="ABOUT" description="About Page" />
    <Navbar/>

    { isDataLoading ? (
        <div className=' flex flex-col justify-center items-center' >                     
              <div className=" mx-32 my-32">
                   <Cycle/>
              </div>
        </div>
      ) : (
    
    <section className="mx-32 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 " >
    <div className=" sm:px-6 lg:px-8 ">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am 
                    <br className="block sm:hidden" /> {data.name}
                </h2>
                <p className="max-w-lg mt-3 text-xl  text-gray-600 md:mt-8">
                {data.description}               
                </p>
            </div>
            <div className="relative">
                <div className="absolute inset-x-0  -translate-x-1/2 left-1/2 w-full bottom-0" >
                    <img src  = {Blob} alt="hi world" />
                </div>
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={data.imageUrl} alt="hellow " />
            </div>
        </div>
    </div>
</section>
      )
      }
   
</div>
  )
}

export default About

