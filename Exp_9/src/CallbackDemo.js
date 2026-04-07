import React, { useState, useCallback, memo } from 'react';

const Button = memo(({ handleClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={handleClick} style={{ marginRight: '10px' }}>{label}</button>;
});

function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>Count: {count}</h3>
      <Button handleClick={increment} label="Increment" />
      <br /><br />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here (button won't re-render)"
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default CallbackDemo;
