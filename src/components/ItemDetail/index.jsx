import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useCart } from "../../contexts/CartContext";

export default function ItemDetail({
  id,
  name,
  description,
  image,
  price,
  stock,
}) {
  const { addItem } = useCart();
  const [addedQty, setAddedQty] = useState(0);

  function onAdd(qty) {
    const product = { id, name, description, image, price, stock }; 
    console.log("Agregando al carrito:", product, qty);
    addItem(product, qty);
    setAddedQty(qty);
  }

  return (
    <>
      <h2>Detalle del producto</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card m-3 shadow-sm" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top card-img-fixed" alt={name} />
          <div className="card-body d-flex flex-column justify-content-between">
            <h3 className="text-center">{name}</h3>
            <p className="card-text">{description}</p>

            <div className="d-flex justify-content-between mt-3">
              <span>Precio: 💲 {price}</span>
              <span>Stock: {stock}</span>
            </div>

            <div className="d-flex justify-content-center mt-3">
              {addedQty === 0 ? (
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
              ) : (
                <Link to="/cart" className="btn">
                  Ir al carrito
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
