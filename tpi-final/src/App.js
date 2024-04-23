import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Error404 from "./Components/Pages/Error404";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FormAppointment from "./Components/Appointments/Appointments";

const App = () => {
  const router = createBrowserRouter([
    { path: "/home", element: <Navigate to="/" replace /> },
    { path: "*", element: <Error404 /> },
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Dashboard />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavBar />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <NavBar />
          <Register />
          <Footer />
        </>
      ),
    },
    {
      path: "/appointment",
      element: (
        <>
          <NavBar />
          <FormAppointment />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
