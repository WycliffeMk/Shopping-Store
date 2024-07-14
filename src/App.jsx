import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Footer from './components/Footer';
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
    
  );
}

export default App;
