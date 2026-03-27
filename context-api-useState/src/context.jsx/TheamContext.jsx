import React, { createContext, useState } from 'react'

export const theamContextData = createContext()
const TheamContext = (props) => {
    const [theam, settheam] = useState('light')

  return (
   <theamContextData.Provider value={[theam,settheam]}>
    {props.children}
   </theamContextData.Provider>
  )
}

export default TheamContext
