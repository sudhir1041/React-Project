import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart";


const App=()=>{

  return(

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;