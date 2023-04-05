import React, { useState, useEffect } from 'react';

function Women() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products/category/women%27s%20clothing');
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
      <h1>Women's Clothing</h1>
      <p>Find the latest fashion trends for women here!</p>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Women;
