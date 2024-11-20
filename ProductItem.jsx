//ProductItem.jsx

import React from 'react';    //import info. from files

function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </li> 
  );
}