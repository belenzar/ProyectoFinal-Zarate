import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg w-100">
      <span className="logo p-3">Kiddo Toys</span>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Productos
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </a>
            <ul className="dropdown-menu text-center">
              <li>
                <NavLink className="nav-link" to={`/category/sensoriales`}>
                  Sensoriales
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={`/category/didacticos`}>
                  Didácticos
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={`/category/ingenio`}>
                  Ingenio
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="d-flex align-items-center p-2">
          <CartWidget/>
        </div>
      </div>
    </nav>
  );
}
