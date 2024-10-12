import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Shorten = () => {
    const [url,setUrl] = useState('')
        
    const handleSubmit = (e)=> {
    e.preventDefault()
    const uri = {url}
    const uriEncoded = uri
    console.log(uri);

    fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(uriEncoded)
    }).then((data)=> {
        console.log(data)
    })
    
 const copyText= ()=> {
  // Get the div element
  var divElement = document.getElementById("copytextid");

  // Create a range object
  var range = document.createRange();

  // Select the contents of the div element
  range.selectNode(divElement);

  // Add the range to the user's selection
  window.getSelection().addRange(range);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Give a visual feedback to the user that the text has been copied
  alert("Text has been copied!");
}


 }
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#f7f7f7] ' >

        <div className='bg-blue-950 rounded-md h-24 full translate-y-[-50%] shorten-bg'>
            <div className='flex items-center  h-full justify-center '>
                <form onSubmit={handleSubmit} className='w-full flex justify-center gap-2 sm:gap-4'>
                  <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)} className='w-2/3 sm:w-3/4 focus:outline-none focus:border-blue-300 p-2 rounded-md' placeholder='Place a link here' required/>
                  <button type='submit' className='rounded-lg  sm:py-2 sm:px-4 bg-cyan-300 text-white' >Shorten it!</button>       
                </form>

            </div>
        </div>
        <div className='hidden'>
            <div className='bg-white px-4 mt-3 py-4 rounded-md opacity-70 shadow-md flex justify-between items-center'>
                <p>{url}</p>
                <span className='text-'>
                    <Link className='text-cyan-500 '>{url}</Link>
                    <button className='rounded-lg ml-2 py-2 px-4 bg-cyan-300 text-white'>Copy</button>
                </span>
            </div>    
        </div>

        <div className=''>
            <div className='bg-white px-4 mt-3 py-4 rounded-md opacity-70 shadow-md flex justify-between'>
                <p>{url}</p>
                <span>
                    <Link className='text-cyan-500'>{url}</Link>
                    <button className='rounded-lg ml-2 py-2 px-4 bg-cyan-300 text-white'>Copy</button>
                </span>
            </div>    
        </div>
            
    </div>
  )
}

export default Shorten