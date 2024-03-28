import React, { useState } from "react";
import "./Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const usuariosGuardados = localStorage.getItem("usuarios");
    const usuarios = JSON.parse(usuariosGuardados);

    const usuarioEncontrado = usuarios.find(
      (a) => a.email === email && a.contraseña === contraseña
    );

    if (usuarioEncontrado) {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="registro-form-container">
      <div className="registro-form-container">
        <form onSubmit={handleLogin} className="registro-form">
          <h2>Iniciar sesión</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="input-field"
              type="email"
              id="login-email"
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
              id="login-contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button-form">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
