import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Map from "./pages/Map";
import View from "./pages/View";
import Documentary from "./pages/Documentary";
import Archives from "./pages/Archives";

// components
import MainLayout from "./components/mainLayout";
import { HorizontalNav, TopNav } from "./components/NavBar";
import { Blocker } from "./components/Blocker";

import "./App.css";

function App() {
  return (
    <Router>
      <Blocker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="/map" element={<Map />} />
          <Route path="/documentary" Element={<Documentary />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/archives" element={<Archives />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
