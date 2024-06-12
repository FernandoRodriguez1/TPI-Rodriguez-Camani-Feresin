import { Link } from "react-router-dom";

import "./Dashboard.css";

import GaleryPhotosPage from "../galery-photos/galery-photos";

import UsersComponent from "../management/users/UsersManager";

import AddUserForm from "../management/users/AddUserForm";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>TEGOBI'S</h1>
      <p>
        Hola, somos Tegobi's, un grupo de peluqueros asociados con más de 10
        años de experiencia. Desde barbería hasta color, no hay estilo que no
        podamos crear. Nos especializamos en proporcionar servicios de alta
        calidad y atención personalizada para satisfacer las necesidades únicas
        de cada cliente. Ya sea que estés buscando un corte clásico, un cambio
        de imagen completo o simplemente un mantenimiento regular, ¡Estamos aquí
        para ayudarte a lucir tu mejor versión!
      </p>
      <Link to="/appointment" className="link-ref">
        Quiero agendar un turno
      </Link>

      <h4>Algunos de nuestros trabajos</h4>
      <GaleryPhotosPage />
      <UsersComponent />
      <AddUserForm />
    </div>
  );
};

export default Dashboard;
