import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Boost = () => {
  return (
    <div>
        <div className='flex gap-4 flex-col justify-center items-center  h-44 bg-blue-950 boost-bg'>
            <p className='text-white font-bold text-2xl sm:3xl'>Boost Your Links Today</p>
            <Link to='/' className='rounded-full py-2 px-4 bg-cyan-300'><button className='text-white'>Get Started</button></Link>
        </div>
    </div>
  )
}

export default Boost