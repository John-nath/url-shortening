import React, { useEffect, useState } from 'react'


const Shorten = () => {
    const [url,setUrl] = useState('')
        
    useEffect(()=> {
        setUrl(encodeURIComponent(input.value))
    },[url])

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#f7f7f7] ' >

        <div className='bg-blue-950 rounded-md h-24 full translate-y-[-50%] shorten-bg'>
            <div className='flex items-center gap-4 h-full justify-center '>
                <form action="/POST" href={`cleanuri.com/api/v1/shorten?${url}`}>
                </form><input type="text" className='w-3/4 border- p-2 rounded-md' placeholder='Place a link here' required/>
                <button className='rounded-lg py-2 px-4 bg-cyan-300 text-white' >Shorten it!</button>
            </div>
        </div>

        {/* <div>
            <p></p> 
            <button>Copy</button>
        </div> */}
    </div>
  )
}

export default