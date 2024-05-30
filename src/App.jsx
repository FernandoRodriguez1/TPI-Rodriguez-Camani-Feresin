import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBarFooter from "./components/layouts/NavBarFooter";
import NotFound from "./routes/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AppointmentForm from "./components/appointments/createAppointment/CreateAppointment";
import UsersManager from "./components/management/users/UsersManager";
import Profilepage from "./components/profile/profilepage";
const App = () => {
  const router = createBrowserRouter([
    { path: "/home", element: <Navigate to="/" replace /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <NavBarFooter />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/appointment",
          element: <AppointmentForm />,
        },
        { path: "/manage/users", element: <UsersManager /> },
        {
          path: "/editprofile",
          element: <Profilepage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
