import React from "react";

function CartItems({ product }) {
  return (
    <div className="product" key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <div className="details">
        <span>{product.desc}</span>
        <span className="price">${product.price}</span>
      </div>
    </div>
  );
}

export default CartItems;
