//ProductList.jsx

import React from 'react'; 
import ProductItem from './ProductItem'; 
//import necessary information from files

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List:</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}