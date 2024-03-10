import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import { addPrice } from './priceSlice';

const MainComponent = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleSearch = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ id: product.id, title: product.title, image: product.images[0], price: product.price }));
    dispatch(addPrice(product.price));
  };

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-3 product">
            <img src={product.images[0]} alt={product.title} />
            <h1>Name: {product.title}</h1>
            <h1>Brand: {product.brand}</h1>
            <p>Type: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>ID: {product.id}</p>
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>
            <p>Discount: {product.discountPercentage}</p>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
