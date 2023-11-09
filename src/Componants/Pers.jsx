import axios from "axios";

export const productsAPI = axios.create({baseURL:"http://localhost:5555/"});

export const getProduct =() =>{
    return productsAPI.get("/product");
}