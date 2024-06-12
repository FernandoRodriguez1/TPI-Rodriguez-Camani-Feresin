import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userverificar = users1.find(
      (a) => a.email === email && a.contraseña === contraseña
    );
    if (userverificar) {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Error: Email o contraseña incorrectos");
    }
    console.log(userverificar);
  };

  const onSubmit = (e) => {
    handleLogin(e);
  };

  return (
    <div className="registro-form-container">
      <form onSubmit={onSubmit} className="registro-form">
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
  );
};

export default Login;
