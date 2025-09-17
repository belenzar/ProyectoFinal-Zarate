import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">
        <span className="text-danger">Ups!</span> Página no encontrada.
      </p>
      <p className="lead">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className="btn mt-3">
        Volver al inicio
      </Link>
    </div>
  );
}