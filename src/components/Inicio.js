import React from "react";
import NavBar from "./NavBar";
import Buscador from "./Buscador";
import TarjetaViaje from './TarjetaViaje';

function Inicio() {
  const viajes = [
    {
      nombreConductor: "Facundo Joffré",
      ciudadOrigen: "Mendoza",
      ciudadDestino: "San Miguel de Tucumán",
      asientosDisponibles: 3,
      fecha: "17 octubre 2024",
      hora: "17:00",
    },
    {
      nombreConductor: "Matias Muti",
      ciudadOrigen: "Buenos Aires",
      ciudadDestino: "Mar del Plata",
      asientosDisponibles: 2,
      fecha: "17 octubre 2024",
      hora: "17:00",
    },
    {
        nombreConductor: 'Paula Federik',
        ciudadOrigen: 'Rosario',
        ciudadDestino: 'Buenos Aires',
        asientosDisponibles: 4,
        fecha: '17 octubre 2024',
        hora: '17:00 hs',
      },
      {
        nombreConductor: 'Diego Trombino',
        ciudadOrigen: 'Buenos Aires',
        ciudadDestino: 'Rosario',
        asientosDisponibles: 3,
        fecha: '17 octubre 2024',
        hora: '17:00 hs',
      },
      {
        nombreConductor: 'Celina Iommi',
        ciudadOrigen: 'Rosario',
        ciudadDestino: 'Santa Fe',
        asientosDisponibles: 4,
        fecha: '17 octubre 2024',
        hora: '17:30 hs',
      },
      {
        nombreConductor: 'Agustin Tombetta',
        ciudadOrigen: 'Rosario',
        ciudadDestino: 'Buenos Aires',
        asientosDisponibles: 2,
        fecha: '17 octubre 2024',
        hora: '18:00 hs',
      },
      {
        nombreConductor: 'Alan Rippari',
        ciudadOrigen: 'Buenos Aires',
        ciudadDestino: 'San Nicolás de los Arroyos',
        asientosDisponibles: 4,
        fecha: '17 octubre 2024',
        hora: '18:00 hs',
      },
      {
        nombreConductor: 'Luis Gonzalez',
        ciudadOrigen: 'Córdoba',
        ciudadDestino: 'Villa María',
        asientosDisponibles: 3,
        fecha: '18 octubre 2024',
        hora: '09:00 hs',
      },
      {
        nombreConductor: 'Nicolás Perez',
        ciudadOrigen: 'La Plata',
        ciudadDestino: 'Mar del Plata',
        asientosDisponibles: 2,
        fecha: '18 octubre 2024',
        hora: '12:00 hs',
      },
      {
        nombreConductor: 'Carla Dominguez',
        ciudadOrigen: 'Bahía Blanca',
        ciudadDestino: 'Buenos Aires',
        asientosDisponibles: 1,
        fecha: '18 octubre 2024',
        hora: '10:00 hs',
      },
      {
        nombreConductor: 'Emilio Suarez',
        ciudadOrigen: 'San Juan',
        ciudadDestino: 'Mendoza',
        asientosDisponibles: 4,
        fecha: '18 octubre 2024',
        hora: '08:00 hs',
      },
      {
        nombreConductor: 'Fernanda Quiroga',
        ciudadOrigen: 'Rosario',
        ciudadDestino: 'Córdoba',
        asientosDisponibles: 3,
        fecha: '19 octubre 2024',
        hora: '07:30 hs',
      },
      {
        nombreConductor: 'Juan Cruz Gutiérrez',
        ciudadOrigen: 'Santa Fe',
        ciudadDestino: 'Buenos Aires',
        asientosDisponibles: 4,
        fecha: '19 octubre 2024',
        hora: '09:00 hs',
      },
      {
        nombreConductor: 'María Lopez',
        ciudadOrigen: 'Buenos Aires',
        ciudadDestino: 'Tandil',
        asientosDisponibles: 2,
        fecha: '19 octubre 2024',
        hora: '15:00 hs',
      },
      {
        nombreConductor: 'Jorge Martín',
        ciudadOrigen: 'Buenos Aires',
        ciudadDestino: 'La Plata',
        asientosDisponibles: 4,
        fecha: '19 octubre 2024',
        hora: '16:00 hs',
      },
      {
        nombreConductor: 'Lucía Reinoso',
        ciudadOrigen: 'Córdoba',
        ciudadDestino: 'Rosario',
        asientosDisponibles: 1,
        fecha: '19 octubre 2024',
        hora: '18:30 hs',
      },
      {
        nombreConductor: 'Maximiliano Perez',
        ciudadOrigen: 'Mendoza',
        ciudadDestino: 'San Juan',
        asientosDisponibles: 2,
        fecha: '19 octubre 2024',
        hora: '14:00 hs',
      },
      {
        nombreConductor: 'Sofia Figueroa',
        ciudadOrigen: 'Tucumán',
        ciudadDestino: 'Salta',
        asientosDisponibles: 3,
        fecha: '20 octubre 2024',
        hora: '08:00 hs',
      },
      {
        nombreConductor: 'Ezequiel Arce',
        ciudadOrigen: 'Jujuy',
        ciudadDestino: 'Salta',
        asientosDisponibles: 2,
        fecha: '20 octubre 2024',
        hora: '07:30 hs',
      },
      {
        nombreConductor: 'Micaela Ordoñez',
        ciudadOrigen: 'Santa Fe',
        ciudadDestino: 'Paraná',
        asientosDisponibles: 3,
        fecha: '20 octubre 2024',
        hora: '10:00 hs',
      },
  ];

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <h2>Buscá tu viaje</h2>
        <Buscador />
        <h2>Viajes Disponibles</h2>
      </div>
      <div className="grid-container">
        {viajes.map((viaje, index) => (
          <TarjetaViaje
            key={index}
            nombreConductor={viaje.nombreConductor}
            ciudadOrigen={viaje.ciudadOrigen}
            ciudadDestino={viaje.ciudadDestino}
            asientosDisponibles={viaje.asientosDisponibles}
            fecha={viaje.fecha}
            hora={viaje.hora}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
};

export default Inicio;
