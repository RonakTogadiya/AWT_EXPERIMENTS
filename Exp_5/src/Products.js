import React from 'react';

function Products() {
  const products = [
    { id: 1, name: 'Ergonomic Office Chair', price: 299 },
    { id: 2, name: 'Oak Dining Table', price: 750 },
    { id: 3, name: 'Modern Bookshelf', price: 450 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Products</h1>
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '8px' }}>
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
