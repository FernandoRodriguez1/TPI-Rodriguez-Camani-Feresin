import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(userName, password);
    if (result.success) {
      await new Promise((a) => setTimeout(a, 2000));
      navigate("/");
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <div className="registro-form-container">
      <form onSubmit={handleLogin} className="registro-form">
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="login-username">Username</label>
          <input
            className="input-field"
            type="text"
            id="login-username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
