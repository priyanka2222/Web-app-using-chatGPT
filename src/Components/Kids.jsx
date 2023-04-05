import React, { useState, useEffect } from 'react';

function Kids() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
      const json = await response.json();
      setProducts(json);
    };
    fetchData();
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Added product with ID ${productId} to cart`);
  };

  return (
    <div>
      <h1>Kids Clothing</h1>
      <p>Find the latest fashion trends for kids here!</p>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.url} alt={product.title} />
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Kids;
