import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Map from "./pages/Map";
import View from "./pages/View";
import Documentary from "./pages/Documentary";

// components
import LanguageSwitch from "./components/Switch";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
      <LanguageSwitch />
    </Router>
  );
}

export default App;
