import './App.css';
import { Login } from './Login';
import Home from './Home';
import Cartidems from './Cartidems'
 import Favourites from './Favourites'
// import productShow from './productShow';
 import {stateContext} from "./Context"
import {useReducer} from "react"
import { Navigate } from 'react-router-dom';

import {Routes,Route} from "react-router-dom"
import { initialState, reducerFunc } from './reducer';
   
function App() {
  const [state,dispatch] = useReducer(reducerFunc,initialState)
  return (
    <div>
    <stateContext.Provider value = {{state,dispatch}}>

     {state?.isAuthenticated  ?
     (<Routes>
     <Route path='/' element = {<Home/>}></Route>
     <Route path='home' element = {<Home/>}></Route>
     <Route path='Cartidems' element = {<Cartidems/>}></Route>
     <Route path='Favourites' element = {<Favourites/>}></Route>
     <Route path='productShow' element = {<productShow/>}></Route>
     <Route path='*' element = {<Navigate to = "Home"/>}></Route>
    </Routes>
     ):(
     <Routes>
      <Route path='login' element = {<Login/>}></Route>
      <Route path='*' element = {<Navigate to = "Login"/>}></Route>
      
     </Routes>)
     }
  
    </stateContext.Provider>
    </div>
  );
}

export default App;