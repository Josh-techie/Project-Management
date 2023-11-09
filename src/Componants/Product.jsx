import React, { useEffect, useState } from 'react';
import { deleteProduct, getProduct } from './Pers';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  function handleDeleteProduct(product) {
    deleteProduct(product)
      .then(resp => {
        const productCopy = products.filter(prd => prd.id !== product.id);
        setProducts(productCopy);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleGetProducts() {
    getProduct()
      .then(resp => {
        setProducts(resp.data);
      })
      .catch(err => {
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
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map(prd => (
                <tr key={prd.id}>
                  <td>{prd.id}</td>
                  <td>{prd.name}</td>
                  <td>{prd.price}</td>
                  <td>{prd.Type}</td>
                  <td><button className="btn btn-primary">Edit</button></td>
                  <td><button className="btn btn-danger" onClick={() => handleDeleteProduct(prd)}>Delete</button></td>
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
