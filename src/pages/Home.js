import React from 'react'
import Cycle from '../animation/Cycle'
import Carousel from '../components/Carousel'
import HomeStoryCard from '../components/HomeStoryCard'
import Navbar from '../components/Navbar'
import Visitcard from '../components/Visitcard'

const slides = [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
  ]

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} />
          ))]}
        </Carousel>
        <HomeStoryCard/>     
        <div class= 'mx-32 '>
            <Visitcard/>
        </div>
        <div class= 'mx-96 mt-32'>
                 <Cycle/>
        </div>   
       
    </div>
  )
}

export default Home