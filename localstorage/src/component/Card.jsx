import React from 'react'

const Card = (props) => {
  return (
    <div  className='w-[22vw] rounded-xl p-5 px-8 flex items-center flex-col text-center mx-10 bg-white h-full '>
      <img className='h-24 w-24 rounded-full mx-auto object-cover object-center' src={props.elem.imgURL} alt="" />
      <h1 className='text-2xl mt-2 font-bold'>{props.elem.userName}</h1>
      <h5 className='text-blue-500 text-lg font-semibold my-2'>{props.elem.role}</h5>
      <p className='text-sm font-medium leading-tight'>{props.elem.userDec}</p>
      <button onClick={()=>{
        props.deleteHandler(props.id);
      }} className='px-4 py-2 active:scale-95 rounded bg-red-500 text-white mt-4'>Remove</button>
  </div>
  )

}

export default Card
