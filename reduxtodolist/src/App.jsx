import { useSelector,useDispatch } from "react-redux";
import { addTask,deleteTask,taskComplete,reOpen} from "./TodoSlice";
import { useState } from "react";


const App=()=>{
  const myTask = useSelector((state)=>state.todo.Task);
  const dispatch=useDispatch();
  const [textval, setTextval] = useState("");
  console.log(myTask);

  const DeleteTask=(id)=>{
    dispatch(deleteTask({id:id}));
  }
  const CompleteTask=(id)=>{
    dispatch(taskComplete({id:id}));
  }
  const Reopen=(id)=>{
    dispatch(reOpen({id:id}));
  }

  const addData=()=>{
    dispatch(addTask({"id":Date.now(),"work":textval, "status":true}))
  }
let i=0;
  const ans=myTask.map((value)=>{
    i++;
    return(
      <>
      <tr>
        <td align="center">{i}</td>
      <td align="center">
  {value.status ? value.work : <span style={{ color: 'red', textDecoration: 'line-through' }}>{value.work}</span>}
</td>

        <td align="center"><button onClick={()=>{DeleteTask(value.id)}}>Delete</button></td>
        <td><button onClick={()=>{CompleteTask(value.id)}}>Complete</button></td>
        <td><button onClick={()=>{Reopen(value.id)}}>Reopen Task</button></td>
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
          <th></th>
        </tr>
        {ans}
      </table>

   </center>
    </>
  )
}
export default App;