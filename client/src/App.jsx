import { Route, Routes } from "react-router"
import Home from './pages/Home/Home'

import Navbar from "./components/Navbar"
import About from "./pages/About/About"
import Team from "./pages/Team/Team"
import Blog from "./pages/Blog/Blog"
import Footer from "./pages/Footer/Footer"



function App() {


  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

    </Routes>
    <About/>
    <Team/>
    <Blog/>
    <Footer/>
 
    </>
  )
}

export default App
