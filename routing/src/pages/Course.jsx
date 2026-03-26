import React from 'react'
import { Outlet } from 'react-router-dom'

const course = () => {
  return (
    <div>
      <div className='w-screen pt-24 text-2xl font-bold text-white'>
       <h1>this is course page</h1>
      </div>
      <Outlet/>
    </div>
  )
}

export default course
