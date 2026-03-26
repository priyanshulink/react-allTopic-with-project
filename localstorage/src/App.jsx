import React, { useState } from 'react'
import './App.css'
import Card from './component/Card';


const App = () => {
 const [userName, setuserName] = useState("");
 const [role, setrole] = useState('');
 const [imgURL, setimgURL] = useState('');
 const [userDec, setuserDec] = useState('');
//for storing old user in localStorage and stored sting form object are comverted into object and all in usesate of setaluser by default
 const localdata = JSON.parse(localStorage.getItem("all-user")) || []

const [allUser, setallUser] = useState(localdata)

  const submitHandler = (e)=>{
    e.preventDefault(); //this is for form handling 
    
    const oldUser = [...allUser];
    console.log(oldUser);
    
    oldUser.push({
      userName,
      imgURL,
      role,
      userDec
    })

    setallUser(oldUser)
//first create storage name all-user and all olduser in it in string form 
    localStorage.setItem("all-user", JSON.stringify(oldUser));

    setuserName('');
    setrole('');
    setimgURL('');
    setuserDec('');
  }

  const deleteHandler =(id)=>{
    const copyUser = [...allUser];
    copyUser.splice(id,1);

    setallUser(copyUser);
    
    localStorage.setItem("all-user", JSON.stringify(copyUser));
  };
  return (
    <div className='bg-black min-h-screen items-center flex'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
       className='text-white py-10 flex flex-col gap-5'>
        <input 

        //this is called two way binding
        value={userName}
        onChange={(e)=>{
          setuserName(e.target.value);
        }}
        className='rounded border-2 border-white px-5 h-15 w-150 ml-10' type="text" placeholder='enter your name' />
        
        <input

        //this is called two way binding
        value={imgURL}
        onChange={(e)=>{
          setimgURL(e.target.value);
        }}
        className='border-2 border-white px-5 w-150 h-15 ml-10' type="text" placeholder='image url'/>
       
        <input 
         //this is called two way binding
        value={role}
        onChange={(e)=>{
          setrole(e.target.value);
        }}
        className='border-2 border-white px-5 w-150 h-15 ml-10' type="text" placeholder='enter role'/>
       
        <input 
         //this is called two way binding
        value={userDec}
        onChange={(e)=>{
          setuserDec(e.target.value);
        }}
        className='border-2 border-white px-5 w-150 h-15 ml-10' type="text" placeholder='enter description'/>

        <button className='h-15 rounded bg-green-500 px-5 w-150 ml-10 mt-10'>Submit</button>
      </form>
      <div className='gap-2 flex flex-wrap'>
        {allUser.map(function(elem, id){

          return <Card elem={elem} id={id} deleteHandler={deleteHandler}/>
        })} 
      </div>
    </div>
  )
}

export default App
