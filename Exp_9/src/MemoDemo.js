import React, { useState, useMemo } from 'react';

function expensiveCalculation(num) {
  console.log('Calculating...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += 1;
  }
  return num * 2;
}

function MemoDemo() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const doubledNumber = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>Expensive Calculation Result: {doubledNumber}</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <br /><br />
      <p>Counter (does NOT re-trigger expensive calc): {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
}

export default MemoDemo;
