
import { PRODUCTS } from "../product";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shopping Store</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
