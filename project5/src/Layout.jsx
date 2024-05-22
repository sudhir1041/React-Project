import { Link , Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>  |
        <Link to="about">About</Link>  |
        <Link to="contact">Contact</Link>  |
        <Link to="product">Product</Link>  |
        <Link to="cart">Cart</Link>

        <hr size="3" color="red" />
        <Outlet/>

        <hr size="3" color="red" />
        www.mycompany.com
        </>
    )
}

export default Layout;