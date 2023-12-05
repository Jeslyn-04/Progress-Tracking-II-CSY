import React,{useState}from 'react'
import Login from './Work/Login.js'
import Signup from './Work/Signup.js'
const Conditional=()=> {
    const[state,setState]=useState({isLoggedin:true});
  return (
    state.isLoggedin?<Login/>:<Signup/>
  )
};

export default Conditional;