import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { collection, addDoc } from "firebase/firestore"
import { utils } from "../../utils/index"

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart()
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" })
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setBuyer({ ...buyer, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Por favor completá todos los campos.")
      setLoading(false)
      return
    }

    if (cart.length === 0) {
      setError("Tu carrito está vacío.")
      setLoading(false)
      return
    }

    const order = {
      buyer: { ...buyer },
      items: cart.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.qty,
      })),
      total: totalPrice(),
      date: new Date(),
    }

    try {
      const docRef = await addDoc(collection(utils.db, "orders"), order)
      setOrderId(docRef.id)
      clearCart()
    } catch (err) {
      console.error("Error al generar la orden:", err)
      setError("Ocurrió un error al generar la orden. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div className="container text-center mt-5">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu orden se generó correctamente.</p>
        <p>
          <strong>ID de la orden:</strong> {orderId}
        </p>
      </div>
    )
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Checkout</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn mb-3"
            disabled={loading}
          >
            {loading ? "Generando orden..." : "Confirmar compra"}
          </button>
        </div>
      </form>
    </div>
  )
}
