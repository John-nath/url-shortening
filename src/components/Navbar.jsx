import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
    
    <div className='flex items-center justify-between py-5 font-medium'>
        <div className='flex items-center gap-4'>
            <img src={assets.logo} className='w-36' alt="" />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/'>
                    <p>Features</p>
                </NavLink> 
                <NavLink to='/'>
                    <p>Pricing</p>
                </NavLink> 
                <NavLink to='/'>
                    <p>Resources</p>
                </NavLink> 
            </ul>
        </div>

        <div className='hidden sm:flex items-center gap-4'>
            <NavLink to='/'>
                <p>Login</p>
            </NavLink> 
            <NavLink to='/' className='rounded-full py-3 px-4 bg-cyan-300'>
                <p>Signup</p>
            </NavLink> 
        </div>

        <img onClick={()=> visible === false ? setVisible(true) : setVisible(false) } src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'  alt="" />
        {/* Sidebar menu for small screenx */}
        <div className={`absolute top-20 right-0 bottom-0 overflow-hidden bg-blue-950 mx- rounded-md  opacity-100 transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col items-center  gap-2 justify-center text-white'>
               
               <div>
                    <NavLink to='/'><p>Features</p></NavLink>
                    <NavLink to='/'><p>Pricing</p></NavLink>
                    <NavLink to='/'><p>Resources</p></NavLink>
                    <hr />
                    <NavLink to='/'><p>Login</p></NavLink>
                    <NavLink to='/'  className='rounded-full py-2 px-4 bg-cyan-300'><p>Signup</p></NavLink>
                </div> 

                
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Navbar