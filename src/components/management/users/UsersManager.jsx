
import { useEffect, useState } from "react";
import { GetAllUsers } from "./user-services";

const UsersManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GetUsers = async () => {
      setLoading(true); 
      try {
        const response = await GetAllUsers();
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    GetUsers();
  }, []);

  return (
    <div>
  {loading && <p>Loading...</p>}
  {error && <p>Error: {error.message}</p>}
  <ul>
    {users.map((user) => (
      <li key={user.email}>
        <ul>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
      </li>
    ))}
  </ul>
</div>

  );
};

export default UsersManager;
