import React, { useState } from "react";
import useAddUser from "./HttpAddUsers";
import "./AdduserForm.css";

const AddUserForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    username,
    setUsername,
    password,
    setPassword,
    age,
    setAge,
    email,
    setEmail,
    phonenumber,
    setPhonenumber,
    addUser,
    error,
  } = useAddUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    await addUser();
  };

  const toggleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container-userform">
      <button onClick={toggleFormVisibility} className="toggle-button-form">
        {isVisible ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      {isVisible && (
        <div className="card-form-users">
          <h1>Agregar Usuarios nuevos</h1>
          <form onSubmit={onSubmit} className="adduser-form">
            <div className="form-group-userform">
              <label className="label-userform">Username</label>
              <input
                className="input-field-userform"
                type="text"
                id="add-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="label-userform">Edad</label>
              <input
                className="input-field-userform"
                type="number"
                id="add-age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
              <label className="label-userform">Numero de telefono</label>
              <input
                className="input-field-userform"
                type="number"
                id="add-number"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
              />
              <label className="label-userform">Email</label>
              <input
                className="input-field-userform"
                type="email"
                id="add-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group-userform">
              <label className="label-userform">Contraseña</label>
              <input
                className="input-field-userform"
                type="password"
                id="add-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p>Error: {error.message}</p>}
            <button type="submit" className="button-form">
              Agregar Usuario
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddUserForm;
