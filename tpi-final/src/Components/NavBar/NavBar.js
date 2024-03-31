import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          TEGOBI'S
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Nuestro Trabajo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Turnos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
