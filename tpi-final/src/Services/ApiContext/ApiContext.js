// import { createContext, useContext, useEffect, useState } from "react";

// const APIContext = createContext();

// VER BIEN COMO LO ADAPTAMOS AL BACK

// export const useAPI = () => {
//   const context = useContext(APIContext);
//   if (!context) throw new Error("There is no API provider");
//   return context;
// };

// export const APIContextProvider = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [purchaseHistory, setPurchaseHistory] = useState([]);

//   const toggleLoading = (value) => {
//     setIsLoading(value);
//   };

//   const catchRejectedFetch = () => {
//     throw new Error("Ha habido un problema. Intentelo de nuevo más tarde");
//   };

//   const putProduct = (product, token) => {
//     fetch(`https://tuxguitarsapi.onrender.com/products/${product.id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(product),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//         else
//           throw new Error("No se pudo editar el producto. Intentelo de nuevo");
//       }, catchRejectedFetch)
//       .then(() =>
//         setProducts((prevProducts) =>
//           prevProducts.map((p) => (p.id === product.id ? product : p))
//         )
//       );
//   };

//   // PUT user deberia modificar contraseña, foto de perfil, email o nombre de usuario.
//   const putUser = async (user, token) => {
//     await fetch(`https://tuxguitarsapi.onrender.com/users/${user.id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(user),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//         else
//           throw new Error("No se pudo editar el usuario. Intentelo de nuevo");
//       }, catchRejectedFetch)
//       .then(() => {
//         setUsers((prevUsers) =>
//           prevUsers.map((u) => (u.id === user.id ? user : u))
//         );
//       });
//   };

//   return (
//     <APIContext.Provider
//       value={{
//         isLoading,
//         toggleLoading,
//         users,
//         setUsers,
//         appointments,
//         setAppointments,
//         products,
//         setProducts,
//         purchaseHistory,
//         setPurchaseHistory,
//         putProduct,
//         putUser,
//       }}
//     >
//       {children}
//     </APIContext.Provider>
//   );
// };
