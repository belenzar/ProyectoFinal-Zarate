import { useState, useEffect } from "react";
import { getAll } from "../../services/products";
import ItemList from "../ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h2 className="text-center m-2 p-2">Catálogo de productos</h2>
      <ItemList products={products} />
    </>
  );
}
