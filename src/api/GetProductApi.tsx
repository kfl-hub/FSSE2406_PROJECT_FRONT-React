import axios from "axios";
import {ProductDto} from "../type/Product.type.ts";

export const getAllProduct=async ()=>{
const response=await axios.get("http://localhost:8080/public/product");
return response.data;
}