import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const create = (props) => {

  const todo = props.todo;
  const setToDo = props.setToDo;

    const [title,setTitle] = useState("")

    const submitHandler= (e) => {
      e.preventDefault();
    
      const newToDo = {
      id : nanoid(),
      title,
      isCompleted : false ,
     }
    
     let copytodo = [...todo]
     copytodo.push(newToDo)
     setToDo(copytodo)
    
     setTitle("")
    
    }


    let button = {
        color : "red",
        padding : "0.5rem" ,
       margin : "0 0 0 2rem"
    }
  return (
    <>
      <h1>Create Task</h1>
     <form onSubmit={submitHandler}>
      <input type="text"
       onChange={(e)=> setTitle(e.target.value)}
       value={title}
      
      />
          
    <button style={button}>Create ToDo</button>
          
          
    </form> 
         <hr />
    </>
  )
}

export default create
