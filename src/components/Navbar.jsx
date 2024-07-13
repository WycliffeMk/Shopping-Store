import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default Navbar;
