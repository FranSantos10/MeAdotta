
import React from 'react';
import Home from './pages/Home';
import Adotar from './pages/Adotar';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PerfilAnimal from './pages/PerfilAnimal';
import FormularioInteresse from './pages/FormularioInteresse';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adotar" element={<Adotar />} />
        <Route path="/adotar/PerfilAnimal" element={<PerfilAnimal />} />
        <Route path="/adotar/Formulario-Adocao" element={<FormularioInteresse />} />
        {/* rotas futuras */}
      </Routes>
    </Router>
  );
}

export default App;

