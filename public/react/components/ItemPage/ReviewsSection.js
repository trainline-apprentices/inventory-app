// ReviewsSection.js
import React from 'react';

const ReviewsSection = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.comment}</p>
            <p>Rating: {review.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsSection;
