import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import products from "./Products.json"
const Productshow = () => {
    let param = useParams()
 
    {products?.map((product) =>{
        if(param.id === product.id){
            return ( 
                <div key={product.id} >
                     <h3>{product.name}</h3>
                     
                </div>
            )  
        }
    })
  return (
    <div>
        <Navbar/>
        <p>{item}</p>
        </div>
       
  )
}

export default Productshow;