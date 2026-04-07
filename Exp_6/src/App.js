import React from 'react';
import FurnitureItem from './Furniture_Item';

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Furniture with all info */}
      <FurnitureItem 
        name="Ergonomic Office Chair"
        price={299}
        color="Midnight Black"
        manufacturer="Steelcase"
        image="https://media.istockphoto.com/id/1824615178/photo/interior-design-of-modern-apartment-with-colorful-dark-walls-and-orange-sofa-interior-mockup.jpg?s=612x612&w=0&k=20&c=iYt26CAed3m48RWN63aJGXe0t_3FaKMFBEy_DigJb4w="
      />

      {/* Furniture with missing info (triggers default props) */}
      <FurnitureItem 
        name="Oak Dining Table"
        price={750}
        // Missing color, manufacturer, and image
      />

      {/* Furniture with all defaults */}
      <FurnitureItem />
    </div>
  );
}

export default App;
