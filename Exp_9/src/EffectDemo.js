import React, { useState, useEffect } from 'react';

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Effect ran! Count is now: ${count}`);

    //Cleanup function
    return () => {
      console.log(`Cleanup for count: ${count}`);
    };
  }, [count]);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>Count: {count}</h3>
      <p>Check the browser tab title — it updates with count!</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default EffectDemo;
