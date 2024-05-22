import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";


const App=()=>{
  const myans=useSelector((state)=>state.myCounter.count)
  const mydispatch=useDispatch();
  return(
    <>
   <center>
   <h1>Welcome to cybrom</h1>
   <button onClick={()=>{mydispatch(increment())}}>Increment</button>
    <h1>{myans}</h1>
   <button onClick={()=>{mydispatch(decrement())}}>decrement</button>
   </center>
    </>
  )
}
export default App;