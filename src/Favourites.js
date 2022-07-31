import React, { useContext } from 'react'
import navbar from './navbar'
import products from "./Products.json"
import { stateContext } from './Context'
const Favourite = () => {
  let {state,dispatch} = useContext(stateContext)

  function rmvBtn(val){
    let res = state.FavArr.filter(el=> el !== val)
    dispatch({
        type : "rmvBtn",
        payLoad : res
    })
  }

  let item = products.map(product=>{
    return(
      state.FavArr.map((fav)=>{
        if(product.id === fav){
          return(
            <div key={product.id} >
                  <p>{product.name}</p>
                  <span onClick={()=>rmvBtn(product.id)} style={{backgroundColor : "red"}}>0</span>
                  
            </div>
          )
        }
      })
      )
  })
  return (
    <div>
      <navbar/>
      Favourite
      <div >
      {item}
      </div>
     
      </div>
  )
}

export default Favourite