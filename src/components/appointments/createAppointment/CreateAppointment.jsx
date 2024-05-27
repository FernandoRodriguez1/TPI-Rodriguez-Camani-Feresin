import { useState } from "react";

import "./CreateAppointment.css"; // Importa el archivo CSS

const AppointmentForm = () => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [product, setProduct] = useState("");
  const [prepaidment, setPrepaidment] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleReservarTurno = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: appointments.length + 1, // Corrección de lenght a length
      fecha: date, // Utiliza los estados definidos en tu componente
      Hora: hour,
      Producto: product,
      Seña: prepaidment, // ¿Es señar el estado que quieres guardar como prepaidment?
    };
    setAppointments([...appointments, newAppointment]);
    setDate("");
    setHour("");
    setProduct("");
    setPrepaidment("");
    SaveOnLocalStorage([...appointments, newAppointment]);
  };

  const SaveOnLocalStorage = (data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem("appointments", jsonData);
      console.log("Turno reservado con éxito");
    } catch (error) {
      console.error("Error al guardar turno:", error);
    }
  };
  console.log(appointments);

  return (
    <div className="form-container">
      {" "}
      <h2>Reserva de turno</h2>
      <div>
        <label>Fecha:</label>
        <input
          className="input-field"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Hora:</label>
        <input
          className="input-field"
          type="time"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
        />
      </div>
      <div>
        <label>Seleccionar producto:</label>
        <select
          className="select-field"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">Seleccione un producto</option>
          <option value="Corte normal">Corte normal ($5000)</option>
          <option value="Corte con barba">Corte con barba ($7500)</option>
          <option value="Corte con barba">Mechas ($9500)</option>
          <option value="Corte con barba">Color completo ($11000)</option>
        </select>
      </div>
      <div>
        <label>
          <input
            className="checkbox-field"
            type="checkbox"
            checked={prepaidment}
            onChange={(e) => setPrepaidment(e.target.checked)}
          />
          Señar turno
        </label>
      </div>
      <button className="submit-button" onClick={handleReservarTurno}>
        Reservar turno
      </button>
    </div>
  );
};

export default AppointmentForm;
