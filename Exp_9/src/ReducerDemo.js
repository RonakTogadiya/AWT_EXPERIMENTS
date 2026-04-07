import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })} style={{ marginRight: '10px' }}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ marginRight: '10px' }}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default ReducerDemo;
