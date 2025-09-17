import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);

  function inc() {
    setQty((prev) => Math.min(stock, prev + 1));
  }
  function dec() {
    setQty((prev) => Math.max(1, prev - 1));
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
        <button className="btn" onClick={dec}>
          -
        </button>
        <div className="mx-3">{qty}</div>
        <button className="btn" onClick={inc}>
          +
        </button>
      </div>
      <button className="btn" onClick={() => onAdd(qty)}>
        Agregar al carrito
      </button>
    </div>
  );
}
