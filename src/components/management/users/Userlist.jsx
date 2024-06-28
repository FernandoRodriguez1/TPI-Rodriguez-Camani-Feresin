import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import "./UserList.css";

const UsersList = ({ users = [], handleDeleteUser }) => {
  const [isAddUserFormVisible, setIsAddUserFormVisible] = useState(false);
  const toggleAddUserFormVisibility = () => {
    setIsAddUserFormVisible(!isAddUserFormVisible);
  };

  return (
    <div className="users-list-container">
      <div className="users-table-container">
        <button
          onClick={toggleAddUserFormVisibility}
          className="toggle-add-user-button"
        >
          {isAddUserFormVisible ? "Ocultar Formulario" : "Agregar Usuarios"}
        </button>
        {isAddUserFormVisible && <AddUserForm />}
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Id</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.userId}</td>
                <td>{user.userType}</td>
                <td>
                  {user.userType === 2 && (
                    <button
                      onClick={() => handleDeleteUser(user.userId)}
                      className="delete-button"
                    >
                      Eliminar Usuario
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
