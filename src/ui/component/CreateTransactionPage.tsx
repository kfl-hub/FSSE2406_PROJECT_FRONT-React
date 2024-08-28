import Box from "@mui/material/Box";
import { CircularProgress, Container,} from "@mui/material";
import BillStepper from "./BillStepper.tsx";
import {useEffect, useState} from "react";
import * as FirebaseAuthService from "../../authService/FIrebaseAuthService.ts";
import {createTransaction} from "../../api/TransactionApi.ts";
import {TransactionDto, TransactionItem} from "../../type/Transaction.type.ts";
import {useNavigate} from "react-router-dom";

type Props = {
    handleCreateTransactionSuccess: () => void,
}
interface TransactionForStripeBody {
    transactionItems: TransactionItem[];
}

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
}

export default function CreateTransactionPage({handleCreateTransactionSuccess}: Props) {
    const [stepperIndex,setStepperIndex]=useState<number>(1);
    const [spinnerColor,setSpinnerColor]=useState<string>("primary");
    const navigate = useNavigate();


    const handleGoStripe = async (tid:number) => {
        try {
            const authConfig = await getAuthConfig();

            const response = await fetch(`http://localhost:8080/checkout/create-checkout-session/${tid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...authConfig.headers,
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
             window.location.href = data.url;
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    useEffect(() => {
        const newTransaction = async () => {
            const response:TransactionDto|undefined = await createTransaction();
            if (response) {
                setStepperIndex(2)
                setSpinnerColor("success")
                await handleGoStripe(response.tid);
            }else{
                console.error("create transaction failed")
            }
        }
        newTransaction();
    }, [])

    return (
        <Container sx={{backgroundColor: "white"}} component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <BillStepper index={stepperIndex}/>
                <CircularProgress color={spinnerColor} size={50}/>
                <img width={300} src={"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1568813214209.jpg"}/>
            </Box>
        </Container>
    );
};