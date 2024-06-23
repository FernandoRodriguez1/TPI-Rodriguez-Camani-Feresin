import { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import ToggleTheme from "../ui/ToggleTheme";
const NavBar = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`navbar ${theme}`}>
      <Link to="/" className="title">
        TegoBis
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <ToggleTheme />
        <li>
          <NavLink to="/">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/editprofile">Editar Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/appointment">Turnos</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reseñas</NavLink>
        </li>
      </ul>
    </nav>
  );
};
NavBar.propTypes = {
  theme: PropTypes.string.isRequired,
};
export default NavBar;
