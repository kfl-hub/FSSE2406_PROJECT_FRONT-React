import axios from "axios";
import {GetProductDto} from "../type/Product.type.ts";

const baseUrl:string="http://localhost:8080"

export const getAllProduct=async ()=>{
    try{
const response=await axios.get(`${baseUrl}/public/product`);
return response.data;
}catch(err){
    console.error(err);
    throw(err)

}}

export const getProductById=async (pid:number)=>{
    try{
        const response=await axios.get(`${baseUrl}/public/product/${pid}`);
        return response.data;
    }catch(err){
        console.error(err);
        throw(err)
    }}