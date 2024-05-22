import { useState } from "react";
import Comp1 from "./Comp1";


const App=()=>{

  const [myname , setMyname]=useState("Sudhir Kumar");
  return(

    <>
    <h1>This is App    : {myname}
    
    
    
    
    
    
    
    </h1>
      <Comp1 user={myname}/>
    </>
  )
}

export default App;