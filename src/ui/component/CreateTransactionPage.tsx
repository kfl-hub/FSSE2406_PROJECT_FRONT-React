import Box from "@mui/material/Box";
import {Button, CircularProgress, Container,} from "@mui/material";
import BillStepper from "./BillStepper.tsx";
import {useState} from "react";
import * as FirebaseAuthService from "../../authService/FIrebaseAuthService.ts";

type Props={
    handleCreateTransactionSuccess:()=>void,
}

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

export default function CreateTransactionPage({handleCreateTransactionSuccess}:Props) {
  const [message, setMessage] = useState("");
  
  const handleGoStripe = async () => {
    const authConfig = await getAuthConfig();
    const response = await fetch("http://localhost:8080/checkout/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authConfig.headers,
      },
    });
    const data = await response.json();
    window.location.href = data.url;
  };
  
    return(
        <Container sx={{backgroundColor: "white"}} component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <BillStepper index={1}/>
                <CircularProgress size={40}/>
                <img width={300} src={"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1568813214209.jpg"}/>
              <Button onClick={handleGoStripe}>Stripeeeeeeeeeeeeeeeee</Button>
            </Box>
        </Container>
    );
};