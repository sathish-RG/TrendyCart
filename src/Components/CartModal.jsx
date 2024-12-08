// src/components/CartModal.jsx
import React from "react";
import Modal from "react-modal";

const CartModal = ({ isOpen, closeCart, cartItems, removeFromCart }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeCart} ariaHideApp={false}>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-sm mb-2 flex justify-between items-center"
            >
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
        <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4" onClick={closeCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default CartModal;
