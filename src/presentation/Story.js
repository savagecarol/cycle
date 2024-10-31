import React  , {useState , useEffect} from 'react'
import Cycle from '../animation/Cycle';
import Navbar from '../components/Navbar'
import StoryCard from '../components/StoryCard'
import { fetchAllDataFromStoryDbThatAreAccept } from '../services/FirebaseFunction'; 
import StaticData from '../utils/Global';

const Story = () => {

  const [isStoryLoading, setStoryLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllDataFromStoryDbThatAreAccept(StaticData.collectionName.storyDb);
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
    <Navbar/>
    <div className="mx-16 mb-16 grid grid-cols-1 sm:grid-cols-3 gap-2">

          {
            isStoryLoading ?
                  <div className='w-full h-full flex flex-col justify-center items-center' >                     
                    <div className="h-96 w-96 mx-32 my-32">
                      <Cycle/>
                    </div>
                  </div>
                 :
                 stories.map(story => (
        <StoryCard id={story.id} title={story.title} name={story.name} description = {story.description} image = {story.images[0]}/>
      ))
            }
    </div>
    </div>
  )
}
export default Story