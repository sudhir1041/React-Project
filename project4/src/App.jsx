import { useRef } from "react";

const App=()=>{

  
  const myref=useRef("")
    const click=()=>{
        myref.current.value="Welcome To Cybrom";
    }

    
  return(
     
    <>
    <textarea name="" id="" cols="30" rows="10" ref={myref}></textarea>
    <button onClick={click}>click</button>
    </>
  )
}
export default App;