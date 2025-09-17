import { NavLink } from "react-router-dom";

export default function Item({ id, name, description, image, price, stock }) {
  return (
    <div
      className="card m-3 shadow-sm align-items-center"
      style={{ width: "18rem" }}
    >
      <img src={image} className="card-img-top card-img-fixed" alt={name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h3>{name}</h3>
        <p className="card-text">{description}</p>

        <div className="d-flex justify-content-between mt-3">
          <span>Precio: 💲 {price}</span>
          <span>Stock: {stock}</span>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <NavLink to={`/item/${id}`} className="btn btn-sm">
            Ver más
          </NavLink>
        </div>
      </div>
    </div>
  );
}
