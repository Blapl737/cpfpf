import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, updateCount, delProduct }) {
  return (
    <div className="ProductList">
      {products.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          updateCount={updateCount}
          delProduct={delProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;