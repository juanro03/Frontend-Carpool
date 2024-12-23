import React, { useState } from 'react';
import cities from './ar.json';  // Importa el archivo JSON con las ciudades (ahora ar.json)

function Buscador() {
  const [originQuery, setOriginQuery] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationQuery, setDestinationQuery] = useState('');
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  // Función para normalizar texto (quitar tildes y convertir a minúsculas)
  const normalizeText = (text) => {
    return text
      .normalize('NFD') // Descompone los caracteres con tildes en dos partes
      .replace(/[\u0300-\u036f]/g, '') // Elimina los caracteres diacríticos (tildes)
      .toLowerCase(); // Convierte a minúsculas
  };

  const fetchSuggestions = (query, setSuggestions) => {
    if (query.length < 3) return; // Evitar búsquedas innecesarias con menos de 3 caracteres

    // Normaliza la consulta de búsqueda
    const normalizedQuery = normalizeText(query);

    // Filtra las ciudades que coinciden con el texto ingresado (sin tildes y minúsculas)
    const filteredCities = cities.filter(city =>
      normalizeText(city.city).includes(normalizedQuery)
    );

    // Limita el número de sugerencias a 4
    const suggestions = filteredCities.slice(0, 4).map(city => ({
      city: city.city,
      country: city.country,
    }));

    setSuggestions(suggestions);
  };

  const handleOriginChange = (e) => {
    const query = e.target.value;
    setOriginQuery(query);
    fetchSuggestions(query, setOriginSuggestions);
  };

  const handleDestinationChange = (e) => {
    const query = e.target.value;
    setDestinationQuery(query);
    fetchSuggestions(query, setDestinationSuggestions);
  };

  const handleSelect = (suggestion, setQuery, setSuggestions) => {
    setQuery(`${suggestion.city}, ${suggestion.country}`);
    setSuggestions([]);
  };

  return (
    <div style={styles.container}>
      {/* Input de Origen */}
      <div style={styles.autocompleteContainer}>
        <input
          type="text"
          placeholder="Origen"
          style={styles.input}
          value={originQuery}
          onChange={handleOriginChange}
        />
        {originSuggestions.length > 0 && (
          <ul style={styles.suggestions}>
            {originSuggestions.map((suggestion, index) => (
              <li
                key={index}
                style={styles.suggestionItem}
                onClick={() => handleSelect(suggestion, setOriginQuery, setOriginSuggestions)}
              >
                {suggestion.city}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Input de Destino */}
      <div style={styles.autocompleteContainer}>
        <input
          type="text"
          placeholder="Destino"
          style={styles.input}
          value={destinationQuery}
          onChange={handleDestinationChange}
        />
        {destinationSuggestions.length > 0 && (
          <ul style={styles.suggestions}>
            {destinationSuggestions.map((suggestion, index) => (
              <li
                key={index}
                style={styles.suggestionItem}
                onClick={() => handleSelect(suggestion, setDestinationQuery, setDestinationSuggestions)}
              >
                {suggestion.city}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>

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
    flexWrap: 'wrap',
    gap: '10px',
    margin: '20px 0',
  },
  autocompleteContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
  },
  input: {
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minWidth: '150px',
    flex: '1',
  },
  suggestions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    maxHeight: '150px',
    overflowY: 'auto',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    zIndex: 1000,
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestionItem: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
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
