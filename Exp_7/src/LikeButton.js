import React, { useState } from 'react';

function LikeButton({ name, price }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', width: '200px' }}>
      <h3>{name}</h3>
      <p><strong>Price:</strong> ${price}</p>
      <button onClick={handleLike} style={{ fontSize: '20px', cursor: 'pointer', background: 'none', border: 'none' }}>
        {liked ? '❤️' : '🤍'} {likeCount}
      </button>
    </div>
  );
}

export default LikeButton;
