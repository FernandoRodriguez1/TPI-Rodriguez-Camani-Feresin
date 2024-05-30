import { useContext, useState } from "react";

import "./profilepage.css";
const Profilepage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [validations, setValidations] = useState({
    minLength: false,
    maxLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });

  const isFormValid = () => {
    return Object.values(validations).every(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Formulario enviado");
    } else {
      console.log("La contraseña no cumple con todos los requisitos");
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setNewPassword(value);

    setValidations({
      minLength: value.length >= 8,
      maxLength: value.length <= 16,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
    });
  };
  return (
    <div className="profile-container">
      <form className="formProfile" onSubmit={handleSubmit}>
        <h1>Modificar Credenciales</h1>

        <label>Ingrese su nueva contraseña</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          className="input-form"
          value={newPassword}
        />
        <ul className="password-requirements">
          <li className={validations.minLength ? "valid" : ""}>
            Al menos 8 caracteres.
          </li>
          <li className={validations.maxLength ? "valid" : ""}>
            Máximo 16 caracteres.
          </li>
          <li className={validations.uppercase ? "valid" : ""}>
            Por lo menos una mayúscula.
          </li>
          <li className={validations.lowercase ? "valid" : ""}>
            Por lo menos una minúscula.
          </li>
          <li className={validations.number ? "valid" : ""}>
            Deberá contar con al menos un número.
          </li>
        </ul>
        <button className="btn-form" type="submit" disabled={!isFormValid()}>
          Guardar cambios
        </button>
      </form>

      <h1>Mis reservas</h1>
      <div className="card-container">
        <ul>
          <li className="card-item">
            <h2 className="card-title">30/05/2024</h2>
            <p className="card-description">Corte de pelo + coloracion</p>
            <div className="img-container"></div>
            <button className="btn-cancel">Cancelar turno</button>
          </li>
        </ul>

        <ul>
          <li className="card-item">
            <h2 className="card-title">30/05/2024</h2>
            <p className="card-description">Corte de pelo + coloracion</p>
            <div className="img-container"></div>
            <button className="btn-cancel">Cancelar turno</button>
          </li>
        </ul>
      </div>

      <h1>Turnos ya concretados.</h1>
      <div className="card-container">
        <ul>
          <li className="card-item">
            <h2 className="card-title">1/04/2024</h2>
            <p className="card-description">Corte de pelo</p>
            <div className="img-container"></div>
            <button className="btn-review">Dejar una reseña</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profilepage;
