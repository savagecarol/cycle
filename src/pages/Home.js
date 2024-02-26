import React from 'react'
import Cycle from '../animation/Cycle'
import Navbar from '../components/Navbar'
import Visitcard from '../components/Visitcard'

const Home = () => {
  return (
    <div>
    <Navbar/>

    <Cycle/>
    <div class= 'mx-32 my-16'>
    <Visitcard/>
    </div>
    </div>
  )
}

export default Home