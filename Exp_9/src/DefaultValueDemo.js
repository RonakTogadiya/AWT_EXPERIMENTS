import React from 'react';
import useDefault from './useDefault';

function DefaultValueDemo() {
  const [name, setName] = useDefault('Guest');

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>Name: {name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value || null)}
        placeholder="Type a name (clear to see default)"
      />
      <br /><br />
      <button onClick={() => setName(null)}>Reset to Default</button>
    </div>
  );
}

export default DefaultValueDemo;
