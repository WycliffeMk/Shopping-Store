import React from 'react';
import { PRODUCTS } from "../product";
import Product from "./Product";
import "./shop.css";
import withAuth from './withAuth'; // Ensure this path is correct

const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Welcome to the Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
        </div>
    );
};

export default withAuth(Shop); // Wrap Shop component with HOC
