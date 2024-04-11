import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Review from "../Review/ReviewList/ReviewList";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Review />
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
    </div>
  );
};

export default Dashboard;
