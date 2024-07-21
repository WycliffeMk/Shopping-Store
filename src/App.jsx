import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ShopContextProvider from "./context/shop-context.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
            <Route path="/shop" element={isLoggedIn ? <Shop /> : <Navigate to="/signin" />} />
            <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/signin" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
