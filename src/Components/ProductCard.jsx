// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className=" border p-4 shadow-sm rounded-2xl">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        className=" bg-orange-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
