import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(product, qty) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: Math.min(p.stock, p.qty + qty) } : p
        );
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function totalItems() {
    return cart.reduce((s, p) => s + p.qty, 0);
  }

  function totalPrice() {
    return cart.reduce((s, p) => s + p.qty * p.price, 0);
  }

  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
