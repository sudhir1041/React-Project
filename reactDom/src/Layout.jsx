import { Link , Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="insert">Insert</Link>
        <Link to="display">Display</Link>
        <Link to="update">Update</Link>
        <Link to="search">Search</Link>

        <hr size="3" color="red" />
        <Outlet/>

        <hr size="3" color="red" />
        www.mydata.com
        </>
    )
}

export default Layout;