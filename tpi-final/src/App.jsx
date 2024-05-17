import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import NotFound from "./routes/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import FormAppointment from "./components/appointments/Appointments";

const App = () => {
  const router = createBrowserRouter([
    { path: "/home", element: <Navigate to="/" replace /> },
    { path: "*", element: <NotFound /> },
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
