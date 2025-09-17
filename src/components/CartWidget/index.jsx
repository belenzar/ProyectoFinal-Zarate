import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="btn position-relative">
      🛒
      {totalItems() > 0 && (
        <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
          {totalItems()}
        </span>
      )}
    </Link>
  );
}
