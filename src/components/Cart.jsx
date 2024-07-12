import React, { useContext } from "react";
import { PRODUCTS } from "../product";
import { ShopContext } from "../../src/context/shop-context";
import { CartItem } from "./Cart-item";
import './Cart.css'

import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems"> 
        {PRODUCTS.map((product) =>{
          if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
          }
        })}
      </div>

      <div className="checkOut">
        <p> Subtotal: ${totalAmount} </p>
        <button onClick={() => navigate("/")}> Continue Shopping</button>
        <button> Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
