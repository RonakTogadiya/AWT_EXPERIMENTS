import React from 'react';
import ReducerDemo from './ReducerDemo';
import MemoDemo from './MemoDemo';
import CallbackDemo from './CallbackDemo';
import ContextDemo from './ContextDemo';
import EffectDemo from './EffectDemo';
import DefaultValueDemo from './DefaultValueDemo';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Hooks Demo</h1>

      <h2>1. useReducer</h2>
      <ReducerDemo />

      <hr />

      <h2>2. useMemo</h2>
      <MemoDemo />

      <hr />

      <h2>3. useCallback</h2>
      <CallbackDemo />

      <hr />

      <h2>4. useContext</h2>
      <ContextDemo />

      <hr />

      <h2>5. useEffect</h2>
      <EffectDemo />

      <hr />

      <h2>6. Custom Hook (useDefault)</h2>
      <DefaultValueDemo />
    </div>
  );
}

export default App;
