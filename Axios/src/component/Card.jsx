import React from 'react'

const Card = (props) => {
 const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className='h-40 w-80 rounded bg-gray-500 text-white'
     style={{ backgroundColor: randomColor }}
    >
      <h2>{props.elem.name}</h2>
      <p>{props.elem.email}</p>
    </div>
  )
}

export default Card
