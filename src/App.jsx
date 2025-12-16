
import './App.css'
import { Routes, Route,BrowserRouter } from "react-router-dom";

import Home from './pages/Home.jsx'; 
import Login from './pages/login.jsx';
function App() {

  return ( 

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
