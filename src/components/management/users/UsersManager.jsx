
import { useEffect, useState } from "react";
import { AddUser, DeleteUser, GetAllUsers } from "./user-services";

const UsersManager = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[age, setAge] = useState("");
  const[email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] =useState("");
  
  
  useEffect(() => {
    const GetUsers = async () => {
      setLoading(true); 
      try {
        const response = await GetAllUsers();
        setUsers(response.data);
        setLoading(false);
        console.log(response)
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    
    GetUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await DeleteUser(userId);
      setUsers(users.filter(user => user.userId !== userId));
    } catch (err) {
      setError(err);
    }
  };
  

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
        userName: username,
        age: parseInt(age),
        email: email,
        passwordHash: password,
        phoneNumber: phonenumber
        
    };

    try {
        await AddUser(userData);
        alert("Usuario agregado exitosamente.");
        setUsername("");
        setAge("");
        setEmail("");
        setPassword("");
        setPhonenumber("");
       
    } catch (error) {
        console.error("Error agregando el usuario:", error);
        alert("Hubo un error al agregar el usuario.");
    }
};

  return (
    <div>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    <ul>
      {users.map((user) => (
        <li key={user.email}>
          <ul>
            <li>Username: {user.userName}</li>
            <li>Email: {user.email}</li>
            <li>Id: {user.userId}</li>
            <li>Type: {user.userType}</li>
            {user.userType ===2 && (
              <button onClick={() => handleDeleteUser(user.userId)}>Eliminar Usuario</button>
            )}
          </ul>
        </li>
      ))}
    </ul>
    <div>
            <h1>Agregar Usuarios nuevos</h1>
            <form onSubmit={onSubmit} className="adduser-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        className="input-field"
                        type="text"
                        id="add-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Edad</label>
                    <input
                        className="input-field"
                        type="number"
                        id="add-age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                    <label>Numero de telefono</label>
                    <input
                        className="input-field"
                        type="number"
                        id="add-number"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input
                        className="input-field"
                        type="email"
                        id="add-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        className="input-field"
                        type="password"
                        id="add-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="button-form">
                    Agregar Usuario
                </button>
            </form>
        </div>
  </div>

  );
};

export default UsersManager;
