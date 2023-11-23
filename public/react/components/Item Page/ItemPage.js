import React from 'react';
import Header from './Header';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';
import ReviewsSection from './ReviewsSection';
import Footer from './Footer';

const ItemPage = ({ product, relatedProducts, reviews }) => {
  return (
    <div className="item-page">
      <Header />
      <ProductDetails product={product} />
      <RelatedProducts relatedProducts={relatedProducts} />
      <ReviewsSection reviews={reviews} />
      <Footer />
    </div>
  );
};

export default ItemPage;
