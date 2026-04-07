import React from 'react';

function CustomerReview() {
  const reviews = [
    { id: 1, name: 'Amit', review: 'Great quality furniture!' },
    { id: 2, name: 'Priya', review: 'Fast delivery and good packaging.' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Customer Reviews</h1>
      {reviews.map((r) => (
        <div key={r.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '8px' }}>
          <h4>{r.name}</h4>
          <p>{r.review}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerReview;
