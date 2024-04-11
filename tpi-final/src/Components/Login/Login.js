import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const users1 = [
    {
      id: "1",
      email: "h1@gmail.com",
      contraseña: "123",
      rol: "Admin",
    },
    {
      id: "2",
      dni_client: "12340956",
      name: "Client",
      email: "cli@gmail.com",
      contraseña: "12",
      rol: "Client",
    },
    {
      id: "3",
      name: "Barber1",
      email: "barb@gmail.com",
      contraseña: "1",
      rol: "Barber",
    },
  ];

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
// import React, { useState } from "react";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [contraseña, setContraseña] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const usuariosGuardados = localStorage.getItem("usuarios");
//     const usuarios = JSON.parse(usuariosGuardados);

//     const usuarioEncontrado = usuarios.find(
//       (a) => a.email === email && a.contraseña === contraseña
//     );

//     if (usuarioEncontrado) {
//       alert("Inicio de sesión exitoso");
//     } else {
//       alert("Credenciales incorrectas");
//     }
//   };

//   return (
//     <div className="registro-form-container">
//       <div className="registro-form-container">
//         <form onSubmit={handleLogin} className="registro-form">
//           <h2>Iniciar sesión</h2>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               className="input-field"
//               type="email"
//               id="login-email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Contraseña:</label>
//             <input
//               className="input-field"
//               type="password"
//               id="login-contraseña"
//               value={contraseña}
//               onChange={(e) => setContraseña(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="button-form">
//             Iniciar sesión
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
