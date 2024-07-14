import React, { useState } from "react";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      text: reviewText,
      rating,
    };
    setReviews([...reviews, newReview]);
    setReviewText("");
    setRating(1);
  };

  return (
    <div className="product-reviews">
      <h3>Reviews</h3>
      <form className="review-form" onSubmit={handleReviewSubmit}>
        <label>
          Rating:
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
