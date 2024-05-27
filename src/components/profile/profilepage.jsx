import { useContext, useState } from "react";

import { APIContext } from "../../services/apiContext/apiContext";
import "./profilepage.css";
const Profilepage = () => {
  const { users } = useContext(APIContext);
  const [newPassword, setNewPassword] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newAvatar && !newPassword) {
      alert("Debe ingresar al menos un campo para actualizar.");
      return;
    }
    // if (newAvatar) {
    //   updateEmail(user, newAvatar)
    //     .then(() => {
    //       alert("actualizado correctamente.");
    //     })
    //     .catch((error) => {
    //       alert("Se produjo un error");
    //     });
    // }

    // if (newPassword) {
    //   updatePassword(user, newPassword)
    //     .then(() => {
    //       alert("Contraseña actualizada correctamente.");
    //     })
    //     .catch((error) => {
    //       alert("Se produjo un error al actualizar la contraseña.");
    //     });
    // }
  };

  const handleAvatarChange = (e) => {
    setNewAvatar(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  return (
    <div className="profile-container">
      <form className="formProfile" onSubmit={handleSubmit}>
        <h1>Modificar Credenciales</h1>
        <label>Ingrese su nueva foto de perfil</label>
        <input
          onChange={handleAvatarChange}
          type="text"
          className="input-form"
          value={newAvatar}
        />
        <label>Ingrese su nueva contraseña</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          className="input-form"
          value={newPassword}
        />
        <button className="btn-form" type="submit">
          Guardar cambios
        </button>
      </form>

      <h1>Mis reservas.</h1>
      <div className="card-container">
        <ul>
          <li className="card-item">
            <h2 className="card-title">30/05/2024 18:30</h2>
            <p className="card-description">Corte de pelo + coloracion</p>
            <div className="img-container">
              {/* <img className="card-img" src={imgUrl} alt={title} /> */}
            </div>
            <button className="btn-cancel">Cancelar turno</button>
          </li>
        </ul>
      </div>

      <h1>Turnos ya concretados.</h1>
      <div className="card-container">
        <ul>
          <li className="card-item">
            <h2 className="card-title">1/04/2024 13:00</h2>
            <p className="card-description">Corte de pelo</p>
            <div className="img-container">
              {/* <img className="card-img" src={imgUrl} alt={title} /> */}
            </div>
            <button className="btn-review">Dejar una reseña</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profilepage;
