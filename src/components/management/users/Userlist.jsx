import React from 'react';

const UsersList = ({ users = [], handleDeleteUser }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.email}>
          <ul>
            <li>Username: {user.userName}</li>
            <li>Email: {user.email}</li>
            <li>Id: {user.userId}</li>
            <li>Type: {user.userType}</li>
            {user.userType === 2 && (
              <button onClick={() => handleDeleteUser(user.userId)}>Eliminar Usuario</button>
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
