import React, { useEffect, useState } from 'react';
import { getProduct } from './Pers';

function Product() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  function handleGetProducts() {
    getProduct()
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>Product List</h1>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prd) => (
                <tr key={prd.id}>
                  <td>{prd.id}</td>
                  <td>{prd.name}</td>
                  <td>{prd.price}</td>
                  <td>{prd.Type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Product;
