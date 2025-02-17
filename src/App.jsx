import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// pages
import Home from "./pages/Home";
import Map from "./pages/Map";

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  )
}

export default App