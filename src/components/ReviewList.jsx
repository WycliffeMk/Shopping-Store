
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h2>Product Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review this product!</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.name}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
