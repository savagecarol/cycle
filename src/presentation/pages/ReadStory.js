import React  , {useState , useEffect}from 'react'
import Navbar from '../../components/Navbar'
import Gallery from '../../components/Gallery';
import Cycle from '../../animation/Cycle';
import { useParams } from 'react-router-dom';
import { getDocumentById } from '../../services/FirebaseFunction';
import StaticData from '../../utils/Global';
const ReadStory = () => {
    const [isStoryLoading, setStoryLoading] = useState(true);
    const [data, setData] = useState();
    const { id } = useParams(); 
    console.log(id)


    useEffect(() => {
        fetchData(id);
      }, [id]); 
    
      const fetchData = async (id) => {
        try {
          const response = await getDocumentById(StaticData.collectionName.storyDb , id);
          if(response != null) {
              setStoryLoading(false)
              setData(response)
        }
        } catch (error) {
          console.error('Error fetching data:', error);
          setStoryLoading(true)
        }
      };

    
  return (
    <div>
        <Navbar/>

    <section className=" px-5 py-6 ">

    { isStoryLoading ? (
        <div className=' flex flex-col justify-center items-center' >                     
              <div className="h-96 w-96 mx-32 my-32">
                   <Cycle/>
              </div>
        </div>
      ) : (
         
        <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl  title-font mb-2 text-gray-900 font-extrabold">{data.title}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{data.description}</p>
            <div className="flex items-center mx-auto">
                <img className="w-16 h-16 rounded-full" src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="Lana image" />
                <p className="text-sm font-medium ">{data.name}</p>
            </div>
            <div className="px-5">
                <Gallery imagesList={data.images} />
            </div>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-justify">{data.story}</p>
        </div>
        )
      }


    </section>
        
    </div>
  )
}

export default ReadStory