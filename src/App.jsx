// src/App.jsx
import './index.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import CartModal from "./Components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <CartModal
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
