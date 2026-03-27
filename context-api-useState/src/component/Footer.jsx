import React, { useContext } from 'react'
import { theamContextData } from '../context.jsx/TheamContext'

const Footer = () => {
   const [theam,setTheam] = useContext(theamContextData)
  return (
    <div className='h-10 w-full absolute bottom-0 flex justify-between bg-zinc-700 text-2xl text-white'>
      <h1>footer</h1>
      <h2 className='mr-2'>{theam}</h2>
    </div>
  )
}

export default Footer
