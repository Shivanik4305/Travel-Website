import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import './App.css'
import Aboutus from './assets/Aboutus'
import BookNow from './assets/BookNow'
import Contactus from './assets/Contactus'
import Destination from './assets/Destination'
import Home from './assets/Home'
import Navbar from './assets/Navbar'
import Mumbai from './assets/Component/Mumbai';
import Kalimpong from './assets/Component/Kalimpong';
import Goa from "./assets/Component/Goa";
import Chhatisgarh from "./assets/Component/Chhatisgarh";
import Khajuraho from './assets/Component/Khajuraho';
import Pangcong from "./assets/Component/Pangcong";
import Varanasi from './assets/Component/Varanasi';
import Orchha from './assets/Component/Orchha';
import Allepy from "./assets/Component/Allepy";
import Jaisalmer from "./assets/Component/Jaisalmer";
import Leh from "./assets/Component/Leh";
import Pune from "./assets/Component/Pune";

import Mahabalipuram from "./assets/Component/Mahabalipuram";
import NubraValley from "./assets/Component/NubraValley";
import Pelling from "./assets/Component/Pelling";
import Periyar from "./assets/Component/Periyar";






function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     
      <Navbar />
      <>
      <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/BookNow" element={<BookNow />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus/>} />
        <Route path="/Mumbai" element={<Mumbai />} />
        <Route path="/Kalimpong" element={<Kalimpong/>} />
        <Route path="/Goa" element={<Goa/>} />
        <Route path="/Chhatisgarh" element={<Chhatisgarh/>} />
        <Route path="/Khajuraho" element={<Khajuraho/>} />
        <Route path="/Pangcong" element={<Pangcong/>} />
        <Route path="/Varanasi" element={<Varanasi/>} />
        <Route path="/Orchha" element={<Orchha/>} />
        <Route path="/Allepy" element={<Allepy/>} />
        <Route path="/Jaisalmer" element={<Jaisalmer/>} />
        <Route path="/Leh" element={<Leh/>} />
        
        <Route path="/Mahabalipuram" element={<Mahabalipuram/>} />
        <Route path="/NubraValley" element={<NubraValley/>} />
        <Route path="/Pelling" element={<Pelling/>} />
        <Route path="/Periyar" element={<Periyar/>} />
        <Route path="/Pune" element={<Pune/>} />
       
        

        </Routes>
       </>
     
    </BrowserRouter>
  )
}

export default App
