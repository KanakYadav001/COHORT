
import React, { useState } from 'react'
import Create from './create'
import Read from './read'
const App = () => {

//   const [Gender,setGender] = useState("Male")
//  const [City,setCity]= useState("Banglore")


 const [todo,  setToDo] = useState([
      {id :1,title:"lam kerla bhai ", isCompleted : false},
    ])




  return (
    <>
    {/* <form action="">
     <input onChange={(e) => console.log(e.target.value)} type="text" placeholder="Type......." />
     <br></br>
     <input  onChange={(e)=> console.log(e.target.checked)} type="checkbox"   />
     <br></br>
     <input value="female" onChange={(e)=> setGender(e.target.value)} checked={Gender=="female" && true} type = "radio"  />
      <br></br>
     <input value="male" onChange={(e)=> setGender(e.target.value)} checked={Gender=="male" && true}  type = "radio"  />
     <br></br>
     <select value={City} onChange={(e) => setCity(e.target.value)}>
      <option value="delhi">Delhi</option>
      <option value="mumbai">Mumbai</option>
      <option value="hariyana">Hariyana</option>
      <option value="banglore">Banglore</option>
     </select>
         </form> */}
     <Create todo={todo} setToDo={setToDo} />
      <Read todo={todo} setToDo={setToDo} />
      
     </>
  )
}

export default App
