import Item from "../Item";
import SpinnerBootstrap from "../SpinnerBootstrap";

export default function ItemList({ products }) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        {products.length === 0 ? (
          <SpinnerBootstrap />
        ) : (
          products.map((product) => <Item key={product.id} {...product} />)
        )}
      </div>
    </div>
  );
}
