import React, { useState } from "react";
import "./Register.css";
const Register = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

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
          <label>Contraseña:</label>
          <input
            className="input-field"
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-form">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
