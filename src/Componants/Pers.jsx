import axios from "axios";

export const productsAPI = axios.create({baseURL:"http://localhost:5555/"});

export const getProduct =() =>{
    return productsAPI.get("/product");
}


export const deleteProduct = (product) => {
    return productsAPI.delete('/product/' + product.id)
}