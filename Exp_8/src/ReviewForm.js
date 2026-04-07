import React, { useState } from 'react';

function ReviewForm() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('5');
  const [recommend, setRecommend] = useState(false);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, rating, recommend, review });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ border: '1px solid #4CAF50', padding: '20px', margin: '10px', borderRadius: '8px' }}>
        <h3>Thank you for your review!</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Rating:</strong> {rating}/5</p>
        <p><strong>Would Recommend:</strong> {recommend ? 'Yes' : 'No'}</p>
        <p><strong>Review:</strong> {review}</p>
        <button onClick={() => setSubmitted(false)}>Submit Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', maxWidth: '400px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Name: </label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Rating: </label><br />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Terrible</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={recommend}
            onChange={(e) => setRecommend(e.target.checked)}
          />
          {' '}Would you recommend this product?
        </label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Review (max 25 chars): </label><br />
        <textarea
          value={review}
          onChange={(e) => {
            if (e.target.value.length <= 25) {
              setReview(e.target.value);
            }
          }}
          maxLength={25}
          rows={3}
          cols={30}
        />
        <p>{review.length}/25 characters</p>
      </div>

      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
