import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout";
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;