import { useContext, useEffect, useState } from "react";
import "./profilepage.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useTokenUser from "../hooks/useTokenUser";
import api from "../API/api-hook";

const Profilepage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const { tokenInfo, error } = useTokenUser();
  const [validations, setValidations] = useState({
    minLength: false,
    maxLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });

  // Consolas de depuración
  console.log("isLoggedIn:", isLoggedIn);
  console.log("tokenInfo:", tokenInfo);
  console.log("Error:", error);

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

  const handleReviewRedirect = () => {
    navigate("/reviews");
  };

  const InfoByUser = async () => {
    try {
      if (tokenInfo && tokenInfo.sub) {
        const userId = tokenInfo.sub;
        console.log("User ID:", userId);
        const response = await api.get(`/User/get-user?id=${userId}`);
        setUserData(response.data);
        console.log("Info traída con éxito.");
      } else {
        console.error("tokenInfo o tokenInfo.sub es nulo.");
      }
    } catch (error) {
      console.error("Error, no se pudo obtener información.", error);
    }
  };

  useEffect(() => {
    if (tokenInfo) {
      console.log("useEffect se ejecuta con tokenInfo:", tokenInfo);
      InfoByUser();
    }
  }, [tokenInfo]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="profile-container">
      <form className="formProfile" onSubmit={handleSubmit}>
        <h1 className="title-form">
          Bienvenido {userData.userName} puedes modificar tus credenciales
        </h1>

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

      <h1 className="titles-appointments">Mis reservas</h1>
      <div className="card-container">
        <ul>
          <li className="card-item">
            <h2 className="card-title">30/05/2024</h2>
            <p className="card-description">Corte de pelo + coloración</p>
            <div className="img-container"></div>
            <button className="btn-cancel">Cancelar turno</button>
          </li>
        </ul>
        {/* Agregar más items según sea necesario */}
      </div>

      <h1 className="titles-appointments">Turnos ya concretados.</h1>
      <div className="card-container">
        <ul>
          <li className="card-item">
            <h2 className="card-title">1/04/2024</h2>
            <p className="card-description">Corte de pelo</p>
            <div className="img-container"></div>
            <button className="btn-review" onClick={handleReviewRedirect}>
              Dejar una reseña
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profilepage;
