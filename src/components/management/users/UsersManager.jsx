import { useContext } from "react";
import { Table } from "react-bootstrap";

import { APIContext } from "../../../services/apiContext/apiContext";

const UsersManager = () => {
  const { users } = useContext(APIContext);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>User type</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Specialties</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.UserId}>
              <td>{user.UserId}</td>
              <td>{user.UserName}</td>
              <td>{user.Email}</td>
              <td>{user.Password}</td>
              <td>{user.UserType}</td>
              <td>{user?.Gender}</td>
              <td>{user?.Age}</td>
              <td>
                {user?.Specialties === "Both"
                  ? "Hairdresser and Colourist"
                  : user?.Specialties}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersManager;
