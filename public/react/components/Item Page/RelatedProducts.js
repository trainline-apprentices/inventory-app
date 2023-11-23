import React from 'react';

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <ul>
        {relatedProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;
