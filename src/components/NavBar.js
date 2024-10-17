import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCarSide } from 'react-icons/fa';

function NavBar() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isUserIconHovered, setUserIconHovered] = useState(false);

  const handleMouseEnter = (index) => setHoveredButton(index);
  const handleMouseLeave = () => setHoveredButton(null);

  const handleUserIconEnter = () => setUserIconHovered(true);
  const handleUserIconLeave = () => setUserIconHovered(false);

  const navButtons = [
    { name: 'Inicio', path: '/' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Donaciones', path: '/donaciones' },
    { name: 'Acerca de', path: '/acerca-de' },
    { name: 'Publicar viaje', path: '/publicar-viaje' },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        <FaCarSide style={{ marginRight: '10px' }} />
        <span>CarpoolApp</span>
      </div>
      <div style={styles.links}>
        {navButtons.map((btn, index) => (
          <Link to={btn.path} key={index} style={{ textDecoration: 'none' }}>
            <button
              style={{
                ...styles.navButton,
                ...(hoveredButton === index ? styles.navButtonHover : {}),
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {btn.name}
            </button>
            </Link>
        ))}
        <Link to="/usuario">
          <FaUser
            style={{
              ...styles.userIcon,
              ...(isUserIconHovered ? styles.navButtonHover : {}),
            }}
            onMouseEnter={handleUserIconEnter}
            onMouseLeave={handleUserIconLeave}
          />
        </Link>
        
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#0093aa',
    color: 'white',
    flexWrap: 'wrap', // Para hacer el nav responsivo
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap', // Ajustar en pantallas más pequeñas
  },
  navButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    margin: '0 10px',
    cursor: 'pointer',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'box-shadow 0.3s ease',
  },
  navButtonHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  userIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease',
    color: 'white',
  },
};

export default NavBar;

