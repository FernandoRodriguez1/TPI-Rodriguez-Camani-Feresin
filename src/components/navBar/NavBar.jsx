import { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  // AGREGAR LA PICTURE COMO LOGO
  // agregar li para admin que vea Usuarios.
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
    <Link to="/" className="title">
      TegoBis
    </Link>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/asasa">Nosotros</NavLink>
      </li>
      <li>
        <NavLink to="/editprofile">Nuestro Trabajo</NavLink>
      </li>
      <li>
        <NavLink to="/appointment">Turnos</NavLink>
      </li>
    </ul>
  </nav>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       TEGOBI'S
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Nosotros
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Nuestro Trabajo
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/appointment">
    //             Turnos
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
export default NavBar;
