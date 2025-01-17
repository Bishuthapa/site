import {Routes, Route} from "react-router-dom";
import './App.css'

import { Navbar } from "./Components/Navbar/NavBar";
import { About } from "./Components/About&Contact/About";
import { Home } from "./Components/Home/Home";
import { Projects} from "./Components/Projects/Projects"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/about&contact" element = {<About />} />
      <Route path ="/projects" element = {<Projects />} />

    </Routes>
    </>
  )
}

export default App
