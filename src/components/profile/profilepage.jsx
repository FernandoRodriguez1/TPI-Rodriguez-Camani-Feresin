import { useContext, useEffect, useState } from "react";
import "./profilepage.css";

import { AuthContext } from "../AuthProvider/AuthProvider";
import useTokenUser from "../hooks/useTokenUser";
import api from "../API/api-hook";

import { ThemeContext } from "../Theme/ThemeContext";
import UserListsAppointments from "../appointments/UserAppointment/UserListsAppointment";
import RedirectToLogin from "../../routes/RedirectToLogin";

const Profilepage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { tokenInfo, error: tokenError } = useTokenUser();
  const [validations, setValidations] = useState({
    minLength: false,
    maxLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });
  const { theme, setTheme } = useContext(ThemeContext);

  console.log("isLoggedIn:", isLoggedIn);
  console.log("tokenInfo:", tokenInfo);
  console.log("Token Error:", tokenError);

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

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      if (tokenInfo && tokenInfo.sub) {
        const idUser = tokenInfo.sub;
        console.log("User 1ID:", idUser);
        const response = await api.get(
          `Review/get-reviews-by-userId/${tokenInfo.sub}`
        );
        setAppointments(response.data);
        setLoading(false);
        console.log("appointments hechos");
      }
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("Error fetching appointments:", err);
    }
  };

  useEffect(() => {
    if (tokenInfo) {
      console.log("useEffect se ejecuta con tokenInfo:", tokenInfo);
      InfoByUser();
      fetchAppointments(tokenInfo.sub);
    }
  }, [tokenInfo]);

  if (tokenError) {
    return <RedirectToLogin />;
  }

  return (
    <div className={`profile-container ${theme}`}>
      <form className={`formProfile ${theme}`} onSubmit={handleSubmit}>
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
      {loading ? (
        <p>Cargando reservas...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <UserListsAppointments appointments={appointments} />
      )}
    </div>
  );
};

export default Profilepage;
