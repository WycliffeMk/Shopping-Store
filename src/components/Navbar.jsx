import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>KiliShop</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
