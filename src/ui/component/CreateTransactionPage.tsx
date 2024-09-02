import Box from "@mui/material/Box";
import { CircularProgress, Container,} from "@mui/material";
import BillStepper from "./BillStepper.tsx";
import {useEffect, useState} from "react";
import {createTransaction, payTransaction} from "../../api/TransactionApi.ts";
import {TransactionDto} from "../../type/Transaction.type.ts";
import * as StripeApi from "../../api/StripeApi.ts";


export default function CreateTransactionPage() {
    const [stepperIndex,setStepperIndex]=useState<number>(1);
    const [spinnerColor,setSpinnerColor]=useState<"primary"|"success">("primary");
    const [loadingImgUrl,setLoadingImgUrl]=useState<string>("/moneygone.jpg");



    useEffect(() => {
        const newTransaction = async () => {
            const response:TransactionDto|undefined = await createTransaction();
            if (response) {
                setLoadingImgUrl("/moneygone2.jpg")
                setStepperIndex(2)
                setSpinnerColor("success")
                await stateTransactionToProcessing(response.tid);
            }else{
                console.error("create transaction failed")
            }
        }
        const stateTransactionToProcessing=async (tid:number)=>{
        const response=await payTransaction(tid);
          if (response) {
            await StripeApi.callStripeCheckOut(tid);
          }else{
            console.error("set transaction state to processing failed")
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
                <img width={300} src={loadingImgUrl}/>
            </Box>
        </Container>
    );
};