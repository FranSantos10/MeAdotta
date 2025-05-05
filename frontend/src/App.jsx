
import React from 'react';
import Home from './pages/Home';
import Adotar from './pages/Adotar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PerfilAnimal from './pages/PerfilAnimal';
import FormularioInteresse from './pages/FormularioInteresse';
import CadastroAnimal from './pages/CadastroAnimal';
import Sobre from './pages/Sobre';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adotar" element={<Adotar />} />
        <Route path="/adotar/PerfilAnimal" element={<PerfilAnimal />} />
        <Route path="/adotar/Formulario-Adocao" element={<FormularioInteresse />} />
        <Route path="/cadastrar" element={<CadastroAnimal />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* rotas futuras */}
      </Routes>
    </Router>
  );
}

export default App;

