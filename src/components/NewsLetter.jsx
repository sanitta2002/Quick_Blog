import React from 'react'

function NewsLetter() {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        
            <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
            <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
            <from className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
                <input className='border border-purple-600 bg-purple-600/10 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type='text' placeholder='Enter your Email id' required />
                <button type='sumbit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transform-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
            </from>
        
    </div>
  )
}

export default NewsLetter