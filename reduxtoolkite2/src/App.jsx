import { useSelector,useDispatch } from "react-redux";
import { bgChange } from "./ColorSlice";
import { useState } from "react";


const App=()=>{
  const [myclr,setMyclr]=useState("")
  const myans=useSelector((state)=>state.myColor.color)
  const dispatch=useDispatch();
  return(
    <>
   <center>
   <h1>Welcome to cybrom</h1>
   Enter any Colour : <input type="text" name="clr" value={myclr} onChange={(e)=>{setMyclr(e.target.value)}}/>
   <button onClick={()=>{dispatch(bgChange(myclr))}}>Change Colour</button>
    <br/><br/>
   <div style={{width:"400px",height:"400px",backgroundColor:myans}}></div>
   </center>
    </>
  )
}
export default App;