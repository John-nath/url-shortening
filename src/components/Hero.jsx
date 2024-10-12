import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Hero = () => {
  return (
<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
    
    <div className='flex flex-col text-center sm:text-left  pb-24 gap-4 sm:flex-row'>
        {/*Left Side*/}
        <div className='order-2 sm:order-1 '>
            <h1 className='font-bold text-5xl sm:text-6xl sm:mb-4  '>More than just shorter links</h1>
            <p className='text-gray-500 my-2'>Build your brands recognition and get detailed insights on how your links are performing</p>
            <Link><button  className='rounded-full py-2 mt-2 text-white w-32 bg-cyan-300'>Get Started</button></Link> 
        </div>

        {/*Right Side*/}
        <div className='order-1 sm:or2'>
            <img className='transform-cpu' src={assets.heroImg} alt="" />
        </div>
    </div>
  </div>
  )
}

export default Hero