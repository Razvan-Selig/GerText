import {Route, Routes} from "react-router-dom"
import Navigation from "./components/Navigation"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { toast, ToastContainer } from "react-toastify"
import Texts from "./pages/Texts"
import { useState } from "react"
import AvailableTexts from "./components/AvailableTexts"
import Profile from "./pages/Profile"
import FullText from "./pages/FullText"
import Vocabulary from "./pages/Vocabulary"

import "./styles/App.css"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  

  return (
    <>
      <Navigation isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/available-texts" element={<AvailableTexts />} />
        <Route path="/texts" element={<Texts/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="/text/:id" element={<FullText/>}/>
        <Route path="/vocabulary" element={<Vocabulary/>}/>
      </Routes>
    </>
  )
}

export default App
