import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Boost from '../components/Boost'
import Shorten from '../components/Shorten'

const Home = () => {
  return (
    <div>
        <Hero />
        <Shorten />
        <Statistics /> 
        <Boost />
    </div>
  )
}

export default Home