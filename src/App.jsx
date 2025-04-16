import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/home'
import Map from './pages/Map'
import View from './pages/View'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
    </Router>
  )
}

export default App