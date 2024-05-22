import { useSelector,useDispatch } from "react-redux";
import { addTask} from "./TodoSlice";
import { useState } from "react";


const App=()=>{
  const myTask = useSelector((state)=>state.todo.Task);
  const dispatch=useDispatch();
  const [textval, setTextval] = useState("");
  console.log(myTask);

  const addData=()=>{
    dispatch(addTask({"id":Date.now(),"work":textval}))
  }
let i=0;
  const ans=myTask.map((value)=>{
    i++;
    return(
      <>
      <tr>
        <td align="center">{i}</td>
        <td align="center">{value.work}</td>
      </tr>
      </>
    )
  })
  return(
    <>
   <center>
    <h1>
      Welcome to To Do List
    </h1>
    Enter Your Task <input type="text" value={textval} onChange={(e)=>{setTextval(e.target.value)}} />
    <button onClick={addData}>Add Task</button>
      <hr />
      <table width="60%" border="2">
        <tr>
          <th >Sn No.</th>
          <th>Task</th>
        </tr>
        {ans}
      </table>

   </center>
    </>
  )
}
export default App;