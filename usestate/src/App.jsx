import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState({});
  

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}));

    console.log(input)
  }
  const handleSubmit=()=>{
    console.log("Data Saved !!!!")
   console.log(input);
  }

  return (
    <>
      <center>
        Enter Roll No: <input type="text" name="rollno" value={input.rollno} onChange={handleInput} /><br /><br />
        Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput} /><br /><br />
        Enter City : <input type="text" name="city" value={input.city} onChange={handleInput} /><br /><br />
        Enter Fees : <input type="text" name="fees" value={input.fees} onChange={handleInput} /><br /><br />

        <button onClick={handleSubmit}>Submit</button>
      </center>
    </>
  );
};

export default App;



// const [color, setColor]=useState("red")

// {/* <h1 style={{backgroundColor:color}}>My Color : {color}</h1>
    
//     <button onClick={()=>{setColor("green")}}>green</button>
//     <button onClick={()=>{setColor("pink")}}>pink</button>
//     <button onClick={()=>{setColor("orange")}}>orange</button>
//     <button onClick={()=>{setColor("yellow")}}>yellow</button> */}


// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");

//   const handleSubmit=()=>{
//     console.log("Name : "+name + " City :"+city);
//   }

//   return (
//     <>
//       <center>
//         Enter Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//         <br />
//         <br />
//         Enter City : <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
//         <br />
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </center>
//     </>
//   );
// };