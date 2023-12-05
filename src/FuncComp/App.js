import React from 'react'
import './App.css'
import img from'./login/image/clg.jpg'
const App = () => {
  return (
  <>
  <h1 className="text">Jeslyn</h1>
  <p className="text">Sri Krishna College of Engineering and Technology</p>
  <p className="text">Cse (Cyber Security)</p>
  <img src={img} alt="No"></img>
  <h4 className="text">Departments</h4>
  <ol>
   <li>Cyber Security</li>
   <li>Information Technology</li>
   <li>Mechanical</li>
   <li>civil</li>
  </ol>
      </>
  )
}
export default App