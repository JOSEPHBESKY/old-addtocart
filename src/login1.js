import React from 'react'
import {useState} from 'react'
import username from './username.json' 
const login1 = () => {
    const [name,setname]=useState('')
    const[password,setPassword]=useState("")
   
    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handlepassword=(e)=>{
        setPassword(e.target.value)
    }
  return (
    <div>
    <form>
    <input type={'text'} onChange={handlename} /> 
    <input type={'password'} onChange={handlepassword} />
    </form>
    </div>
  )
}

export default login1