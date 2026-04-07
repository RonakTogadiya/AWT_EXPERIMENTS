import React, { useState } from 'react';

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default FunctionalCounter;
