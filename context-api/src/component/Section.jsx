import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Section = () => {
   const data =  useContext(userDataContext)
   console.log(data);
   
  return (
    <div className='min-h-screen text-2xl text-white font-bold text-center bg-zinc-800'>
      <h1>this is section</h1>
      <div className='text-white'>
        <p>{data?.[0]?.name}</p>
        <p>{data?.[0]?.email}</p>
      </div>
    </div>
  )
}

export default Section
