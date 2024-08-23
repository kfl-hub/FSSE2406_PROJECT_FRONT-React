
import * as FirebaseAuthService from "../authService/FIrebaseAuthService.ts"
import axios from "axios";
import {CartItemDto, PutCartDto} from "../type/Cart.type.ts";

const baseUrl:string="http://localhost:8080"

const getAuthConfig=async ()  =>{
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        console.error("**getAccessToken**")
        throw new Error()
    }
    return{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    }
}

export const putCartItem= async (pid:number,quantity:number,sizeValue:string|number)=>{
try{
    const response= await axios.put<PutCartDto>(`${baseUrl}/cart/${pid}/${quantity}/${sizeValue}`
        ,null
    ,await getAuthConfig()
)
return response.data;
}catch (err){
    console.error(err)
}
}

export const getCartItem=async ()=>{
    try {
        const response= await axios.get<CartItemDto[]>(`${baseUrl}/cart`
            ,await getAuthConfig())
        return response.data;
    }catch (err){
        console.error(err)
    }
}
export const deleteCartItem = async (cid: number) => {
    try {
        const response = await axios.delete<PutCartDto>(
            `${baseUrl}/cart/${cid}`,
            await getAuthConfig()
        );
        return response.data;
    } catch (err) {
        console.error(err);
    }
};