import React, { useContext, useState } from "react";
import { ShopContext } from "../../src/context/shop-context";
import ProductReviews from "./ProductReviews";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [showReviews, setShowReviews] = useState(false);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <div className="product-details">
        <img src={productImage} alt={productName} />
        <div className="description">
          <b>
            <p>{productName}</p>
          </b>
          <p>Price: ${price}</p>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
          </button>
          <button
            className="toggleReviewsBttn"
            onClick={() => setShowReviews(!showReviews)}
          >
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
        </div>
      </div>
      {showReviews && <ProductReviews productId={id} />}
    </div>
  );
};

export default Product;
