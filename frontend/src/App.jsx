
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adotar" element={<Adotar />} />
        <Route path="/animais/:id" element={<PerfilAnimal />} />
        <Route path="/interesse" element={<FormularioInteresse />} />
        <Route path="/cadastrar" element={<CadastroAnimal />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* rotas futuras */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

