import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <div key={product.id} className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={product.thumbnail}
                alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}
                <div className="badge badge-secondary">${product.price}</div>
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
