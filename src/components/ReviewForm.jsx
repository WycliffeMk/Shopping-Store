import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, rating, comment });
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h2>Leave a Review</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
