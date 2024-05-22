import { useState } from "react";
import axios from 'axios';




const Insert=()=>{
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/students";

        axios.post(url,input).then((response)=>{
            alert("data added successfully")
        })
    }
    return(
        <>
        Enter Id : <input type="text" name="id" onChange={handleInput} /><br /><br/>
        Enter Roll No : <input type="text" name="rollno" onChange={handleInput} /><br /><br/>
        Enter Name : <input type="text" name="name" onChange={handleInput} /><br /><br/>
        Enter City : <input type="text" name="city" onChange={handleInput} /><br /><br/>
        Enter Fees : <input type="text" name="fees" onChange={handleInput} /><br /><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Insert;