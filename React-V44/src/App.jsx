
const App = () => {


function clickMe() {
  alert("Level This Site")
}

function Parameter(msg) {
  alert(msg)
}


  return (
  <>
    <div>hello</div>
    <div>World</div>
    <button onClick={clickMe}>Click Me</button>
    <button onClick={()=> Parameter("hello bhagggg jayooooo") }>Click Me</button>
  </>
  );
}

export default App
