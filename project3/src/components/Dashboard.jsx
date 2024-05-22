import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

    const name=localStorage.getItem("uname");
    const email=localStorage.getItem("uemail");

const Dashboard=()=>{
    const mynav=useNavigate()

    const userNotset=()=>{
        if(!name)
            {
                mynav("/login")
            }
    }
    useEffect(()=>{
        userNotset();
    },[])
    const logout=()=>{
        localStorage.clear();
        mynav("/login");
    }
    return(
        <>
        <h1>Dashboard</h1>
        <h2>Welcome {name} <br />
        Email :{email}
        </h2>
        <a href="#" onClick={logout}>Logout</a>
        </>
    )
}
export default Dashboard;