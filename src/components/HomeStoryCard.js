import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cycle from '../animation/Cycle';
import { fetchAllDataFromStoryDbThatAreAcceptWithMaxCount } from '../services/FirebaseFunction';
import StaticData from '../utils/Global';

const HomeStoryCard = () => {
  

  const [isStoryLoading, setStoryLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllDataFromStoryDbThatAreAcceptWithMaxCount(StaticData.collectionName.storyDb);
        if(data === null) { 
          setStoryLoading(true)
        } else setStoryLoading(false);
        setStories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setStoryLoading(true);
        setStories([]);
      }
    };
    fetchData();
  }, []);


  return (
    <section className="text-gray-600 body-font">
    <div className="container py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{StaticData.companyName}</h1>
          <div className="h-1 w-20 bg-yellow-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{StaticData.companyDescription} </p>
      </div>
      <div className="flex flex-wrap -m-4">
     
      {


      isStoryLoading ?       
       <div className='w-full flex flex-col justify-center items-center' >                     
                    <div className="h-72 w-72 mx-32 my-32">
                      <Cycle/>
                    </div>
                  </div>
                  :
          stories.map(story =>(
        <NavLink to={`/stories/${story.id}`} className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img className="h-42 rounded w-full object-cover object-center mb-6" src={story.images[0]} />
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{story.title}</h2>
            <p className="leading-relaxed text-base">{story.description}</p>
          </div>
        </NavLink>
                )
                ) 
      }

      </div>
    </div>
  </section>
  
  
  
  
  )
}

export default HomeStoryCard