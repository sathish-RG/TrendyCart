// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className=" bg-orange-500 p-4 text-white flex justify-between items-center">
      <h1 className=" font-bold text-3xl">Trendy Cart</h1>
      <button
        className="bg-white px-4 py-2 rounded text-orange-500"
        onClick={openCart}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
