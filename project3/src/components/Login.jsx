import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const mynav=useNavigate()

    const handlelogin=()=>{
        let url=`http://localhost:3000/users/?userid=${userid}`;

        axios.get(url).then((res)=>{
            if(res.data.length==0)
                {
                    alert("Invalid UserName")
                }
                else
                {
                    if(res.data[0].password!=password)
                        {
                            
                            alert("Invaid Password")
                        }
                        else
                        {
                            localStorage.setItem("uname",res.data[0].name);
                            localStorage.setItem("uemail",res.data[0].email);
                            mynav('/dashboard');
                            
                        }
                }
        })
    }
    return(

        <>
        <h1>User Login !!</h1>
        Enter User ID : <input type="text" name="userid" value={userid} onChange={(e)=>{setUserid(e.target.value)}} /><br/>
        Enter Password : <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
        <button onClick={handlelogin}>Login Now!!!</button>
        </>
    )
}
export default Login;