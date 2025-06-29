import React, { useState } from 'react'

function Login() {

 const [email, setEmail] =useState('')
 const [password , setPassword] =useState('')

  const handleSubmit= async (e)=>{
    e.preventDefult()
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-purple-600/30 shadow-2xl shadow-primary/15 rounded-lg bg-purple-600/20'>
        <div className='flex flex-col items-center justify-center '>
            <div className='w-full py-6 text-center'>
              <h1 className='text-3xl font-bold'><span className='text-primary'>Admin Login</span></h1>
              <p className='font-light'>Enter your credentials to access the admin panel</p>
            </div>
            <form onSubmit={handleSubmit} action="" className='mt-6 w-full sm:max-w-md text-gray-600'>
              <div className='flex flex-col'>
                <label>Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type='email' required placeholder='Your email id' className='border-b-2 border-primary/40 p-2 outline-none mb-6'/>
              </div>
              <div className='flex flex-col'>
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' required placeholder='Enter your password' className='border-b-2 border-primary/40 p-2 outline-none mb-6'/>
              </div>
              <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login