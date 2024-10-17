// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Buscador from './components/Buscador';
import './components/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importar páginas
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Donaciones from './components/Donaciones';
import AcercaDe from './components/AcercaDe';
import PublicarViaje from './components/PublicarViaje';
import Usuario from './components/Usuario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/donaciones" element={<Donaciones />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="/publicar-viaje" element={<PublicarViaje />} />
      <Route path="/usuario" element={<Usuario />} />
      {/* Otras rutas si es necesario */}
    </Routes>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
};

export default App;
