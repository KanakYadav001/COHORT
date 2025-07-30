import React, { useState } from 'react'

export default function Create() {

    let[fullname,setFullname]= useState("")
    let[age,setage]= useState(18)
    let submitHandel = (e) =>   {
   e.preventDefault();
   let pri = {fullname,age};
   console.log(pri)
}
  return (
    <div>
       <h1>Register User</h1>
         <form onSubmit={submitHandel}>
          <input value={fullname} type="text" placeholder='username' onChange={(e) => setFullname(e.target.value)}/>
          <input value={age} type="number" placeholder='age'onChange={(e) => setage(e.target.value)}/>
          <button>Submit</button>
         </form>
    </div>
  )
}
