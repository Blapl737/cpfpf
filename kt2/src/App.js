import React, { useState } from 'react';
import AddForm from './compnents/AddForm';
import ProductList from './compnents/ProductList';
import './App.css';

const Data = [
  { id: 1, name: 'Велосипед', price: 1000, count: 1 },
  { id: 2, name: 'Самокат', price: 700, count: 1 },
  { id: 3, name: 'Ролики', price: 1300, count: 2 },
  { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
];

function App() {

  const [products, setProducts] = useState(Data);


  function addProduct  (name, price)  {
    let newProduct = { id: Date.now(), name, price: Number(price), count: 1 };
    setProducts([...products, newProduct]);
  };

  function updateCount (id, amount) {
    setProducts(products.map(product => product.id === id 
                                    && product.count + amount <= 25 
                                    && product.count + amount >= 0 ? { ...product, count: product.count + amount } : product ));
  };
  
  function delProduct(id){
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="Cont">
      <AddForm addProduct={addProduct} />
      <ProductList products={products} updateCount={updateCount} delProduct={delProduct} />
    </div>
  );
}

export default App;