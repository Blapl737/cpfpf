import React, { useState } from 'react';

function AddForm({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function AddProductBtn() {
    if(name && price) {
      addProduct(name, price);
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="AddForm">
      <input 
        type="text" 
        placeholder="Имя продукта" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Стоимость" 
        value={price}
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button onClick={AddProductBtn}>Добавить</button>
    </div> 
    
  );
}

export default AddForm;