import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add any other product details here */}
    </div>
  );
};

export default ProductDetails;
