import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container-home">
      <h1>Bienvenidos a BarberBarberia</h1>
      <h3>Estos son algunos de nuestros trabajos</h3>
      <h1>Cortes</h1>
      <div>Hola</div>
      <div>Hola</div>
      <div>Hola</div>
      <h1>Colores/Mechas</h1>
      <div>Hola</div>
      <div>Hola</div>
      <div>Hola</div>
      <Link to="/login">Quiero agendar un turno</Link>
    </div>
  );
};

export default Home;
