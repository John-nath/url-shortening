import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#1b1b1b] text-white'>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-start sm:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-14 pt-20 pb-20 text-sm ">
            <div className='mt-2'> 
                <img src={assets.logo} className='w-32 text-white' alt="" />
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>Features</p>
                <ul className='flex flex-col gap-1 '>
                    <li>URL shortening</li>
                    <li>Branding</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Resources</p>
                <ul className='flex flex-col gap-1 '>
                    <li>Blogs</li>
                    <li>Developers</li>
                    <li>Support</li>                  
                </ul>
            </div>    
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 '>
                    <li>About</li>
                    <li>Our team</li>
                    <li>Corners</li>
                    <li>Contact</li>
                </ul>
            </div>    
            <div>
                <ul className='flex mt-2 gap-1'>
                    <li><img className='size-4' src={assets.facebook_icon} /></li>
                    <li><img className='size-4' src={assets.twitter_icon} /></li>
                    <li><img className='size-4' src={assets.pinterest_icon} /></li>
                    <li><img className='size-4' src={assets.instagram_icon} /></li>
                </ul>
            </div>  
                    
        </div> 

    </div>
  )
}

export default Footer