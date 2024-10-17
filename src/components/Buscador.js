import React from 'react';

function Buscador() {
  return (
    <div style={styles.container}>
      <input type="text" placeholder="Origen" style={styles.input} />
      <input type="text" placeholder="Destino" style={styles.input} />
      <input type="date" style={styles.input} />
      <input type="number" placeholder="Cantidad de pasajeros" style={styles.input} />
      <button style={styles.button}>Buscar</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Ajuste flexible para pantallas pequeñas
    gap: '10px',
    margin: '20px 0',
  },
  input: {
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minWidth: '150px', // Tamaño mínimo para pantallas pequeñas
    flex: '1', // Ajuste flexible en pantalla pequeña
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0093aa',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Buscador;
