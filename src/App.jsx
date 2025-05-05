import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Map from "./pages/Map";
import View from "./pages/View";
import Documentary from "./pages/Documentary";

import Intro from "./pages/contents/intro";
// Pour régler la mise-en-page et la création des components pour l'intro

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
        <Route path="/map/intro" element={<Intro />} />
      </Routes>
      <LanguageSwitch />
    </Router>
  );
}

export default App;
