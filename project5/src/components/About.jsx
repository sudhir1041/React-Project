import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return(

        <>
        <h1>About Our Company </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, commodi cumque facere odit molestiae natus eos molestias culpa illum quam illo quibusdam tenetur aliquid ipsam necessitatibus earum saepe assumenda incidunt.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iure aspernatur natus, velit debitis amet vero dignissimos aliquid quo ullam, error deleniti provident vitae doloremque explicabo doloribus molestias consequatur labore.
        </p>

        <hr  color="blue"/>
        <div style={{display:"flex", justifyContent:"space-between", width:"100%", height:"60vh"}}>
            <div style={{width:"20%"}}>
                <Link to="/aboutcompany">About Company</Link><br /><br />
                <Link to="/aboutproduct">About Product</Link><br /><br />
                <Link to="/aboutselling">About Selling</Link><br />
                 </div>
            <div style={{width:"80%"}}>
                <Outlet/>
            </div>
        </div>
        <hr  color="blue"/>
        </>
    )
}
export default About;