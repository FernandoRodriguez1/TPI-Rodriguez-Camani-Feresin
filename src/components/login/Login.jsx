import { useState } from "react";
import "./Login.css";

const users1 = [{ email: "usuario1@example.com", contraseña: "password1" }];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userverificar = users1.find(
      (a) => a.email === email && a.contraseña === password
    );
    if (userverificar) {
      setErrorMessage(""); // Limpiar mensaje de error
      alert("Inicio de sesión exitoso");
    } else {
      setErrorMessage("Error: Email o contraseña incorrectos");
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
          <label htmlFor="login-email">Email</label>
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
          <label htmlFor="login-password">Contraseña</label>
          <input
            className="input-field"
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="button-form">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
