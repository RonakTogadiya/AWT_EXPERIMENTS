import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';
import LikeButton from './LikeButton';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React States Demo</h1>

      <h2>Class Component Counter</h2>
      <ClassCounter />

      <hr />

      <h2>Functional Component Counter</h2>
      <FunctionalCounter />

      <hr />

      <h2>Furniture Products with Like Button</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <LikeButton name="Ergonomic Office Chair" price={299} />
        <LikeButton name="Oak Dining Table" price={750} />
        <LikeButton name="Modern Bookshelf" price={450} />
      </div>
    </div>
  );
}

export default App;
