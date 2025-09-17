import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Tu carrito está vacío 🛒</h2>
        <button className="btn mt-3 mb-3" onClick={() => navigate("/products")}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>

      <div className="row g-4 justify-content-center">
        {cart.map((p) => (
          <div key={p.id} className="col-sm-6 col-md-4 col-lg-3 d-flex">
            <div className="card shadow-sm w-100" style={{ width: "18rem" }}>
              <img
                src={p.image}
                className="card-img-top card-img-fixed"
                alt={p.name}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h3>{p.name}</h3>
                <p>Cantidad: {p.qty}</p>
                <p className="fw-bold">Subtotal: $ {p.price * p.qty}</p>
                <button
                  className="btn btn-sm mt-2"
                  onClick={() => removeItem(p.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h4>Total: $ {totalPrice()}</h4>
        <button className="btn me-2 mb-2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="btn mb-2" onClick={() => navigate("/checkout")}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
