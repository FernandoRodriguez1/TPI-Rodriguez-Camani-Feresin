import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";

const NavBarFooter = () => (
  <>
    <NavBar /> <Outlet /> <Footer />
  </>
);

export default NavBarFooter;
