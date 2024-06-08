import { useState } from "react";

import "./Register.css";

const Register = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({
    minLength: false,
    maxLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);

    setValidations({
      minLength: value.length >= 8,
      maxLength: value.length <= 16,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoUsuario = { id: usuarios.length + 1, nombre, email, contraseña };
    setUsuarios([...usuarios, nuevoUsuario]);
    setNombre("");
    setEmail("");
    setContraseña("");
    guardarEnLocalStorage([...usuarios, nuevoUsuario]);
  };

  const guardarEnLocalStorage = (data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem("usuarios", jsonData);
      console.log("Datos guardados en localStorage");
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };
  console.log(usuarios);

  return (
    <div className="registro-form-container ">
      <form onSubmit={handleSubmit} className="registro-form">
        <h2>Registro</h2>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            className="input-field"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="input-field"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label>Ingrese su nueva contraseña</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          className="input-form"
          value={password}
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
        </div>
        <button type="submit" className="button-form">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
