import React from "react";

function ItemCard({ product, handleAddToCart }) {
  return (
    <div className="product" key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <div className="details">
        <span className="product-description">{product.desc}</span>
        <span className="price">${product.price}</span>
      </div>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
