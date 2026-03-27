import React, { createContext } from 'react'
export const userDataContext = createContext()
const UserContext = (props) => {

  const users = [
  {
    id: 1,
    name: "Priyanshu Singh",
    email: "priyanshu@gmail.com",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "Rahul Raj",
    email: "rahul@gmail.com",
    role: "Backend Developer"
  },
  {
    id: 3,
    name: "Riya Bisen",
    email: "riya@gmail.com",
    role: "UI/UX Designer"
  }
];

  return (
    <userDataContext.Provider value={users}>
        {props.children}
    </userDataContext.Provider>
  )
}

export default UserContext
