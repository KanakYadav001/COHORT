
const read = (props) => {


   const todo = props.todo;

    const renderTodos = todo.map((to)=> {
  return <li key={todo.id}>{to.title}</li>
})
  return (
    <>
      <h1 style={{color : "red"}}>Pending Todos</h1>
         <ol>{renderTodos}</ol>
    </>
  )
}

export default read
