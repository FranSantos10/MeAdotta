import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import Adotar from './pages/Adotar';
import PerfilAnimal from './pages/PerfilAnimal';
import FormularioInteresse from './pages/FormularioInteresse';
import CadastroAnimal from './pages/CadastroAnimal';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ overflowX: 'hidden', width: '100%' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adotar" element={<Adotar />} />
          <Route path="/animais/:id" element={<PerfilAnimal />} />
          <Route path="/interesse/:id" element={<FormularioInteresse />} />
          <Route path="/cadastrar" element={<CadastroAnimal />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />


          {/* rotas futuras */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

