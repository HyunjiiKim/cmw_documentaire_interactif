import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Map from "./pages/Map";
import View from "./pages/View";
import Documentary from "./pages/Documentary";
import Archives from "./pages/Archives";

// components
import { HorizontalNav, TopNav } from "./components/NavBar";
import { Blocker } from "./components/Blocker";

import "./App.css";



function App() {
  return (
    <Router>
      <Blocker />
      {location.pathname !== "/documentary" && <HorizontalNav />}
      {location.pathname !== "/" && <TopNav />}
      <Routes>
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/archives" element={<Archives />} />
      </Routes>
    </Router>
  );
}

export default App;
