import {useContext, useEffect, useState} from "react";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  Button,

  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import BillStepper from "../component/BillStepper.tsx";
import {TransactionDto} from "../../type/Transaction.type.ts";
import {useParams} from "react-router-dom";
import {getTransactionByTid} from "../../api/TransactionApi.ts";
import TransactionTableRow from "../component/TransactionTableRow.tsx";
import {callStripeCheckOut} from "../../api/StripeApi.ts";

export default function TransactionPage() {
  const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
  const {tid} = useParams<{ tid: string|undefined }>();
  const loginUser = useContext(LoginUserContext);
  

  const grandTotal = transactionDto?.total;
  
  const handleTryAgainOnClick=async ()=>{
    callStripeCheckOut(Number(tid));
  }
  
  useEffect(() => {
    if (loginUser) {
      const fetchData = async () => {
        const responseData = await getTransactionByTid(Number(tid));
        setTransactionDto(responseData);
      };
      fetchData();
    }
    
  }, [loginUser])
  
  return !transactionDto || !grandTotal
    ? <LoadingSpinner/>
    : (<Box sx={{
        background: `url(https://images.unsplash.com/photo-1539182972012-585804f77548?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundPosition: "50% 80%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'start',
        height: "100%",
        minHeight: "100vh",
        width: "100%",
        pt: 0,
      }}>
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: "100%",
            minHeight: "100vh",
            width: "100%",
            m: 0, pt: 4,
          }}
        >
          <Typography align={"center"} variant={"h3"}>
            <BillStepper index={2}/>
            Unsuccessful payment</Typography>
            <TableContainer sx={{width: "90%", height: "100%", m: 8}}>
              <Table>
                <TableHead sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                  <TableRow>
                    <TableCell width={"48%"}>Item</TableCell>
                    <TableCell sx={{fontSize: "1.2rem"}}>Price</TableCell>
                    <TableCell sx={{fontSize: "1.2rem"}} align={"center"}>Quantity</TableCell>
                    <TableCell sx={{fontSize: "1.2rem"}} align={"right"}>Total</TableCell>
                    <TableCell width={32}> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactionDto.items.map((item) => (
                    <TransactionTableRow key={item.tpid} item={item}/>
                  ))}
                  <TableRow sx={{backgroundColor: 'rgba(255, 255, 255, 0.85)', p: 4}}>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell colSpan={2}>
                      <Box
                        sx={{
                          height: 400,
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "center"
                        }}>
                        
                        <Divider variant="middle"/>
                        <Box height={56} display={"flex"} alignItems={"center"}
                             justifyContent={"space-between"}>
                          <Typography variant={"h6"} fontWeight={"bold"}>Grand
                            total:</Typography>
                          <Typography variant={"h4"}>${grandTotal.toFixed(1)}</Typography>
                        </Box>
                        <BillStepper index={2}/>
                        <Box height={72} display={"flex"} alignItems={"center"}
                             justifyContent={"end"} alignContent={"center"}>
                          
                          
                          <Button size={"large"} fullWidth variant={"contained"}
                          onClick={handleTryAgainOnClick}
                          >Try again</Button>
                          
                          
                        </Box>
                      </Box>
                    
                    </TableCell>
                    <TableCell> </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          
        </Box>
      </Box>
    
    );
};