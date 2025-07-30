import React, { useState } from 'react'
export default function Read() {
    const [username,setUsername] = useState([
  {username : "kanak" , age : 24},
  {username : "Vaibhav" , age : 20},
  {username : "Aunrag" , age : 19},

]);


let RenderUser = username.map((user,index)=>{
  return <li key={index}>{user.username} {user.age}</li>
})
  return (
    
    <div>
      <ol>{RenderUser}</ol>
    </div>
  )
}
