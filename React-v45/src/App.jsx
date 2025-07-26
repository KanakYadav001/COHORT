import { useState } from "react"

function App() {

  const [username,setUsername]  = useState("kanak")

let count = 0

   function changeName() {
      
  if(count==0){
  setUsername("Vaibhav")
 count++

}else{
   setUsername("kanak");
   count--;
}
}



  return (
   <div>
      <p>Username:</p>
      <p>{username}</p>
      <button onClick={changeName}>Click Me</button>
   </div>
  )
}

export default App
