import axios from "axios";
import getEnvConfig from "../config/env/EnvConfig.ts";

// const baseUrl:string="http://localhost:8080"
//const baseUrl:string="https://d2pzk7o9v2057n.cloudfront.net"
const baseUrl=getEnvConfig().baseUrl;

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