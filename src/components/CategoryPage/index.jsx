import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../services/products";
import ItemList from "../ItemList";
import SpinnerBootstrap from "../SpinnerBootstrap";

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return (
    <>
      <h2 className="text-center mb-4">Categoría: {category}</h2>
      <div className="container mt-4 align-items-center">
        {products.length === 0 ? (
          <SpinnerBootstrap />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </>
  );
}
