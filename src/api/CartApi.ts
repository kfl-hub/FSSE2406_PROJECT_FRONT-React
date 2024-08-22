
import * as FirebaseAuthService from "../authService/FIrebaseAuthService.ts"
import axios from "axios";
import {PutCartDto} from "../type/Cart.type.ts";

const baseUrl:string="http://localhost:8080"

const getAuthConfig=async ()  =>{
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        throw new Error()
        console.error("getAccessTokengetAccessTokengetAccessTokengetAccessTokengetAccessTokengetAccessTokengetAccessTokengetAccessToken")
    }
    console.log(accessToken)
    return{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    }
}

export const putCartItem= async (pid:number,quantity:number)=>{
try{
    const response= await axios.put<PutCartDto>(`${baseUrl}/cart/${pid}/${quantity}`
        ,null
    ,await getAuthConfig()
)
return response.data;
}catch (err){
    console.error(err)
}
}