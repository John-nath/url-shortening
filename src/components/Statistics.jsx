import React from 'react'
import { assets } from '../assets/assets'

const Statistics = () => {
  return (
    <div className='bg-[#f7f7f7] py-24 w-full flex flex-col'>
        <div className='flex flex-col  items-center justify-center text-center'>
            <h2 className=' font-bold text-2xl sm:3xl' >Advanced Statistics</h2>
            <p className='text-gray-700'>Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>


        <div className='flex flex-col items-center py-10 sm:justify-center sm:gap-4 sm:flex-row sm:w-full'>
          <div className='flex  justify-center flex-col w-[75%] sm:w-1/4 h-72'>
            <div className='self-center bg-blue-950 p-5 w-20  rounded-full z-20 translate-y-[50%] sm:self-start sm:ml-4'><img  className=' w-fit' src={assets.brand_recognition_icon} alt="" /></div>
            <div className='bg-white  py-16 px-4  h-full z-10 rounded-md text-center'>
              <p className=' mb-2 font-bold'>Brand Recognition</p>
              <p className=' text-sm text-gray-700'>Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
            </div>
            <div className='sm:flex  sm:justify-end'>
              <hr className='1-8 sm:w-32 h-[4px]  sm:h-[5px] font-black align-self-end rotate-90 sm:rotate-0 sm:translate-y-[-90px] sm:translate-x-32 bg-green-700 '/>
            </div>
          </div>
          <div className='flex flex-col w-[75%] justify-center sm:w-1/4 h-72 translate-y-10'>
              <div className=' self-center bg-blue-950 p-5 w-20 rounded-full z-20 translate-y-[50%] sm:self-start sm:ml-4'><img  className=' w-fit' src={assets.detailed_record_icon} alt="" /></div>
              <div className='bg-white py-16 px-4 h-full z-10 rounded-md'>
                <p className=' mb-2 font-bold'>Detailed Record</p>
                <p className=' text-sm text-gray-700'>Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
              </div>
            <div className='sm:flex sm:justify-end'>
            <hr className='1-8 sm:w-32 h-[4px]  sm:h-[5px] font-black align-self-end rotate-90 sm:rotate-0 sm:translate-y-[-130px] sm:translate-x-32 bg-green-700 '/>
            </div>
          </div>
          <div className='flex flex-col justify-center w-[75%] sm:w-1/4  h-72 translate-y-20'>
          <div className=' self-center bg-blue-950 p-5 w-20 rounded-full z-20  translate-y-[50%] sm:self-start sm:ml-4'><img  className=' w-fit' src={assets.fully_customizable_icon} alt="" /></div>
              <div className='bg-white py-16 px-4 h-full rounded-md'>
                <p className=' mb-2 font-bold'>Fully Customizable</p>
                <p className=' text-sm text-gray-700'>Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
              </div>
          </div>
         
        </div>


    </div>
  )
}

export default Statistics