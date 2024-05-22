import Design from "./Design";
import Employee from "./Json"



const App=()=>{
  const data= Employee.map((key)=>
  <Design nm={key.name}
  empid={key.empid}
  dept={key.dept}
  city={key.city}
  salary={key.salary}/>  
);
  return(
    <>
    <div id="data">
      {data}
      </div>
    
    </>
  )
}

export default App;