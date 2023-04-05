import React, { useState, useEffect } from 'react';
import '../Css/womens.css';;

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

      <div className="product-list">
      {products.map((product) => (
        <div className="product-card products-container ">
          <img src={product.image} alt={product.name} className="product-image" width="250" height="250" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Women;
