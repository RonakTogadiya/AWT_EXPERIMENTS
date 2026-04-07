import React from 'react';

const FurnitureItem = (props) => {
    const { image, price, color, manufacturer, name } = props;

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <img src={image} alt={name} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
            <h3>{name}</h3>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Color:</strong> {color}</p>
            <p><strong>Manufacturer:</strong> {manufacturer}</p>
        </div>
    );
};

FurnitureItem.defaultProps = {
    image: 'https://m.media-amazon.com/images/I/61X9WQBdypL._SL1500_.jpg',
    name: 'Unkown Furniture',
    price: 'Contact for price',
    color: 'Not specified',
    manufacturer: 'Generic Brand'
};

export default FurnitureItem;
