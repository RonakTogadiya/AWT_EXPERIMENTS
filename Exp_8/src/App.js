import React from 'react';
import ReviewForm from './ReviewForm';
import RefForm from './RefForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Forms Demo</h1>

      <h2>Customer Review Form (Controlled)</h2>
      <ReviewForm />

      <hr />

      <h2>Form using useRef (Uncontrolled)</h2>
      <RefForm />
    </div>
  );
}

export default App;
