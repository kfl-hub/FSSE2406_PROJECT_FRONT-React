import * as FirebaseAuthService from "../authService/FIrebaseAuthService.ts";
import axios from "axios";
import {TransactionDto} from "../type/Transaction.type.ts";

//const baseUrl: string = "http://localhost:8080"
const baseUrl: string = "http://ec2-47-129-34-31.ap-southeast-1.compute.amazonaws.com:8080"

const getAuthConfig = async () => {
  const accessToken = await FirebaseAuthService.getAccessToken();
  if (!accessToken) {
    console.error("**getAccessToken**")
    throw new Error()
  }
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
};

export const createTransaction = async () => {
  try {
    const response =
      await axios.post<TransactionDto>(`${baseUrl}/transaction/prepare`
        , null
        , await getAuthConfig()
      );
    return response.data;
  } catch (err) {
    console.error(err)
  }
};
export const getTransactionByTid = async (tid: number) => {
  try {
    const response = await axios.get<TransactionDto>(
      `${baseUrl}/transaction/${tid}`,
      await getAuthConfig()
    );
    return response.data;
  } catch (err) {
    console.error(`Failed to fetch transaction with tid ${tid}`, err);
    throw err;
  }
};

export const payTransaction = async (id: string) => {
  try {
    const response = await axios.patch(
      `${baseUrl}/transaction/${id}/pay`, null,
      await getAuthConfig()
    );
    return response.data;
    
  }catch (err) {
    console.error("Failed to pay transaction");
    console.error(err)
  }
  
};

export const finishTransaction = async (tid: number) => {
  try {
    const response = await axios.patch<TransactionDto>(
      `${baseUrl}/transaction/${tid}/finish`,
      null,
      await getAuthConfig()
    );
    return response.data;
  } catch (err) {
    console.error("Failed to finish transaction");
    console.error(err)
    throw err;
  }
};