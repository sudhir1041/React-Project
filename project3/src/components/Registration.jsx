import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Registration=()=>{

    const [input, setInput]=useState({});

    const mynav=useNavigate()

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/users";

        axios.post(url,input).then((response)=>{
            alert("Registration Successfully")
            mynav("/login")
        })
    }

    return(

        <>
        <h1>Registration Page</h1>
        Enter Your Name : <input type="text" name="name" onChange={handleInput} /><br />
        Enter Your userid : <input type="text" name="userid" onChange={handleInput} /><br />
        Enter Your Email : <input type="text" name="email" onChange={handleInput} /><br />
        Create Your Password : <input type="text" name="password" onChange={handleInput} /><br /><br />
        <button onClick={handleSubmit}>Register Now!!!</button>
        </>
    )
}
export default Registration;