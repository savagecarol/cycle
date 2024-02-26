import React from 'react'
import Navbar from '../components/Navbar'
import  one from '../assets/one.png'
import Blob from '../assets/blob.svg'

const About = () => {
  return (
    <div> 
    <Navbar/>
    <section class="mx-32 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16 " >
    <div class=" sm:px-6 lg:px-8 ">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am 
                    <br class="block sm:hidden" /> Kartikeya Sharma
                </h2>
                <p class="max-w-lg mt-3 text-xl  text-gray-600 md:mt-8">
                I'm Kartikeya Sharma, a software engineer based in Noida, fueled by a love for cycling. Riding through the streets of Noida brings me solace, as I immerse myself in the rhythm of the pedals and the changing scenery. Inspired by my passion for exploration, I've set out to create an online community for fellow cyclists. Through our website, we'll unite individuals who share our enthusiasm for adventure and cycling. Together, we'll organize group rides, exchange favorite routes, and encourage each other to push our boundaries. Whether you're a seasoned cyclist or just starting, our community welcomes you to join us on this journey. Let's explore the beauty of Noida and beyond, one pedal at a time.
                </p>
            </div>
            <div class="relative">
                <div class="absolute inset-x-0  -translate-x-1/2 left-1/2 w-full bottom-0" >
                    <img src  = {Blob}/>
                </div>
                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={one} alt="" />
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default About

