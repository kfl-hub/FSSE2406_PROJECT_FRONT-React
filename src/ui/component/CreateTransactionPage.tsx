import Box from "@mui/material/Box";
import {CircularProgress, Container,} from "@mui/material";
import BillStepper from "./BillStepper.tsx";

type Props={
    handleCreateTransactionSuccess:()=>void,
}

export default function CreateTransactionPage({handleCreateTransactionSuccess}:Props) {
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
                <CircularProgress size={80}/>
                <img width={300} src={"https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1568813214209.jpg"}/>
            </Box>
        </Container>
    );
};