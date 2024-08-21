import axios from "axios";
import {GetProductDto} from "../type/Product.type.ts";

export const getAllProduct=async ()=>{
    try{
const response=await axios.get("http://localhost:8080/public/product");
return response.data;
}catch(err){
    console.error(err);
    throw(err)

}}

export const getProductById=async (pid:number)=>{
    try{
        const response=await axios.get(`http://localhost:8080/public/product/${pid}`);
        return response.data;
    }catch(err){
        console.error(err);
        throw(err)
    }}