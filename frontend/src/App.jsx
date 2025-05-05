
import React from 'react';
import Home from './pages/Home';
import Adotar from './pages/Adotar';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adotar" element={<Adotar />} />
        {/* rotas futuras */}
      </Routes>
    </Router>
  );
}

export default App;

