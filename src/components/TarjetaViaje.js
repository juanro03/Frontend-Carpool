// TarjetaViaje.js
import React from 'react';

const TarjetaViaje = ({ nombreConductor, ciudadOrigen, ciudadDestino, asientosDisponibles, fecha, hora }) => {
    return (
        <div className="card">
          <div className="card-header">
            <img
              src={`https://i.pravatar.cc/150?u=${nombreConductor}`}
              alt="profile"
              className="profile-pic"
            />
            <div>
              <h3>{nombreConductor}</h3>
              <p>{asientosDisponibles} Lugares libres</p>
            </div>
          </div>
          <div className="card-body">
            <p><strong>Origen:</strong> {ciudadOrigen}</p>
            <p><strong>Destino:</strong> {ciudadDestino}</p>
            <p><strong>Fecha:</strong> {fecha}</p>
            <p><strong>Hora:</strong> {hora}</p>
          </div>
          <button className="ver-button">Ver</button>
        </div>
      );
    };

const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      margin: '10px',
      flex: '1 1 calc(33.333% - 20px)', // Ancho de tarjeta en desktop
      boxSizing: 'border-box',
      transition: 'all 0.3s ease', // Transición para el cambio de tamaño
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    profilePic: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    body: {
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#007B8F',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
    },
    // Media queries para móviles
    '@media (max-width: 768px)': {
      card: {
        flex: '1 1 100%', // Hacer que la tarjeta ocupe todo el ancho en móviles
      },
    },
  };

export default TarjetaViaje;
