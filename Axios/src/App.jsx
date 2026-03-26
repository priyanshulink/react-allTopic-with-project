import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './component/Card'

const App = () => {
  const [allData, setallData] = useState([])
 const getData = async()=>{
  //this is how we call api using axios
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(res.data)
  setallData(res.data)
 }

  return (
     <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
    <button onClick={getData} className='bg-gray-500 rounded h-12 w-24'>
      get Data
    </button>

    <div className='mt-5 flex flex-wrap justify-center text-center text-2xl font-bold gap-10'>
      
     {allData.map(function(elem, id){
      return <Card key={id} elem={elem}/>
    })}
    </div>
    
  </div>
  )
}

export default App
