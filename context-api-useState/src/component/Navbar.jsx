import React, { useContext} from 'react'
import { theamContextData } from '../context.jsx/TheamContext'

const Navbar = () => {
   const [theam,settheam] = useContext(theamContextData)


  return (
    <div className='h-15 w-full flex justify-between bg-zinc-700 text-2xl text-white'>
      <h1>Navbar </h1>
      <h2>{theam}</h2>
      <button onClick={()=>{
        if(theam=='light'){
            settheam('dark')
        }else{
            settheam('light')
        }
      }}
      
      className="h-10 px-5 mt-1 mr-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">setTheam</button>
    </div>
  )
}

export default Navbar
