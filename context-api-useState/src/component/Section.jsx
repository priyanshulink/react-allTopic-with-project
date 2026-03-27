import React, { useContext } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { theamContextData } from '../context.jsx/TheamContext'

const Section = () => {
    const [theam,settheam] = useContext(theamContextData)
  return (
    <div className='min-h-screen text-2xl text-white font-bold flex justify-between bg-zinc-800'>
        
      <Section1 />
      <p>{theam}</p>
      <Section2 />
    </div>
  )
}

export default Section
