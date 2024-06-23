import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../API/api-hook";
import { jwtDecode } from "jwt-decode";
// Creamos el contexto de autenticación
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Estado para verificar si el usuario está autenticado
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Estado para almacenar el rol del usuario
  const [roles, setRoles] = useState(null);

  // Efecto para verificar si hay un token almacenado al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Si hay un token, establece el estado de autenticación como verdadero
      setIsLoggedIn(true);
      // Además, decodifica el token para obtener el rol del usuario
      const user = jwtDecode(token);
      setRoles(user.usertype); // Guarda el rol en el estado
    }
  }, []); // Se ejecuta solo una vez al cargar la aplicación (dependencia vacía)

  // Función para iniciar sesión
  const login = async (userName, password) => {
    try {
      // Realiza la solicitud de inicio de sesión al servidor
      const response = await api.post("/authentication", {
        userName,
        password,
      });
      // Obtiene el token de la respuesta
      const token = response.data;

      // Decodifica el token para obtener los datos del usuario
      const user = jwtDecode(token);
      const role = user.usertype;

      // Guarda el token en el LocalStorage
      localStorage.setItem("token", token);
      // Actualiza el estado de autenticación y el rol del usuario
      setIsLoggedIn(true);
      setRoles(role);

      // Muestra un mensaje de éxito
      toast.success("Inicio de sesión exitoso.", {
        position: "bottom-left",
      });

      // Retorna un objeto indicando éxito en el inicio de sesión
      return { success: true };
    } catch (error) {
      // En caso de error, muestra un mensaje de error
      toast.error("Error al iniciar sesión.", {
        position: "bottom-left",
      });
      // Retorna un objeto indicando fallo en el inicio de sesión y el mensaje de error
      return { success: false, message: error.message };
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    // Elimina el token del LocalStorage
    localStorage.removeItem("token");
    // Actualiza el estado de autenticación y el rol del usuario
    setIsLoggedIn(false);
    setRoles(null);
  };

  // Retorna el contexto de autenticación con las funciones y estados necesarios
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, roles }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
