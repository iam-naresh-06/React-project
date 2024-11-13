/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './View.css';

export const View = ({ cart, setCart }) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    setCart(cart.map((product) => 
      product.id === productId ? { ...product, quantity: quantity } : product
    ));
  };

  return (
    <>
      <h2 className="cart-heading">Cart Products</h2>
      <div className="Cart-container">
        {cart.map((product) => (
          <div className="Cart-product" key={product.id}>
            <div className="img">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="Cart-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.price}</p>
              <div>
                <label>Quantity: </label>
                <input 
                  type="number" 
                  value={product.quantity} 
                  min="1" 
                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          </div>
        ))}
        <h2 className="cart-amt">Total amount Rs: {Total}</h2>
      </div>
    </>
  );
};
