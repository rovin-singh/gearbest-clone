import axios from "axios"
import { URL } from "./connect";
export const getProductsData=()=>{
    return axios.get(`${URL}/products`);
}

export const getproduct=(id)=>{
 return axios.get(`${URL}/products/${id}`)
}