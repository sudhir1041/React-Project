import { Link , Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="registration">Registration</Link> |
        <Link to="login">Login</Link> 

        <hr size="3" color="red" />
        <Outlet/>

        <hr size="3" color="red" />
        www.mydata.com
        </>
    )
}

export default Layout;