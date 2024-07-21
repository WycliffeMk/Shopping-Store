import React, { useContext } from "react";
import axios from "axios";
import { PRODUCTS } from "../product";
import { ShopContext } from "../../src/context/shop-context";
import { CartItem } from "./Cart-item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const userId = 1; 
      const response = await axios.post('/checkout', { user_id: userId, cartItems });
      if (response.status === 200) {
        clearCart(); 
        alert('Checkout successful');
        navigate('/'); 
      }
    } catch (error) {
      console.error('Checkout failed', error);
      alert('Checkout failed');
    }
  };

  const totalCartItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart Items</h1>
        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count">{totalCartItems}</span>
        </div>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkOut">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
