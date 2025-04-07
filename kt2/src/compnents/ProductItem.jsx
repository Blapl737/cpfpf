import React from 'react';

function ProductItem({ product, updateCount, delProduct }) {
  const { id, name, price, count } = product;

  function handleIncrement(){
      updateCount(id, 1);
  };

  function handleDecrement() {
      updateCount(id, -1);
      if (count - 1 === 0) {
        delProduct(id);
      }
  };

  return (
    <div className="ProductItem" >
      <div className="Card">
        <p>{name}</p>
        <p>Price: {price}</p>
        <div className="Counter">
          <button onClick={handleDecrement}>-</button>
          <span>{count}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;